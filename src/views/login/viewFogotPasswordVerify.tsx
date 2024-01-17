import { forgotPasswordAPI, forgotPasswordCheckTokenAPI, forgotPasswordUpdatePassAPI } from "@/api/auth";
import { EyeCloseIcon, EyeOpenIcon, GoogleIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, Grid, IconButton, InputBase, Stack, Typography } from "@mui/material";
import router from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InputForm from "./components/input";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/hooks/hooks";
import { login } from "@/slices/userSlice";
import ViewResetPassSuccess from "./components/resetPassResult";
import LoadingDialog from "@/components/dialog/loadingDialog";
import { isValidPassword } from "@/utils";

type FormData = {
    password: string;
    re_password: string;
};

export default function ViewFogotPasswordVerify(props: any) {
    const { t } = useTranslation()
    const { token } = router.query

    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [initNote, setInitNote] = useState('Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9')

    const formRegister = {

        password: register('password', {
            required: {
                value: true,
                message: 'This field is required.'
            },
            minLength: {
                value: 6,
                message: 'Password must be longer than 6 characters.'
            },
            validate: (val: string) => {
                if (!isValidPassword(val)) {
                    return "Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9";
                }
            },
        }),
        re_password: register('re_password', {
            required: {
                value: true,
                message: 'This field is required.'
            },
            minLength: {
                value: 6,
                message: 'Password must be longer than 6 characters.'
            },
            validate: (val: string) => {
                if (watch('password') != val) {
                    return "Your passwords do no match";
                }
            },
        }),

    }

    const [showPassword, setShowPassword] = useState<any>({
        password: false,
        re_password: false
    })

    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState<any>(undefined)
    const [isVerifyToken, setIsVerifyToken] = useState(false)

    const dispatch = useAppDispatch()

    function BtnShowPass({ value }: { value: string }) {
        return (
            <IconButton onClick={() => {
                setShowPassword((prev: any) => ({
                    ...prev,
                    [value]: !prev[value]
                }))
            }
            }>
                {!showPassword[value] ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </IconButton >
        )
    }

    const handleVerifyReset = async (token: any) => {
        setPending(true)
        try {
            const rs = await forgotPasswordCheckTokenAPI(token)
            if (rs.success) {
                setIsVerifyToken(true)
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setPending(false)
        }
    }

    const handleChangePass = async (data: FormData) => {
        setPending(true)
        try {
            const rs = await forgotPasswordUpdatePassAPI(token, data.password, data.re_password)
            if (rs.success) {
                dispatch(login(rs.data))
                setResult(rs.data)
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setPending(false)
        }
    }

    useEffect(() => {
        if (token) {
            handleVerifyReset(token)
        }
    }, [token])


    useEffect(() => {
        if (errors.password || errors.re_password) {
            setInitNote('')
        }
    }, [errors])

    if(result){
        return <ViewResetPassSuccess/>
    }

    return (
        <Fragment>
            <LoadingDialog open={pending}/>
            <Stack direction='row' justifyContent='center' alignItems='center' width='100%' height='100%'
                sx={{
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Grid container maxWidth={'sm'}
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <Grid item xs={12}
                        sx={{
                            borderLeft: '3px solid #fff',
                            borderRight: '3px solid #fff',
                            background: 'rgba(255, 255, 255, 0.50)',
                            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
                            backdropFilter: 'blur(2.5px)',
                            height: '100vh'
                        }}
                    >
                        <Stack direction='column' alignItems='center' justifyContent='center'
                            sx={{
                                px: [2, 2, 10, 10, 10],
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    'svg': {
                                        width: 224,
                                        height: '100%',
                                        objectFit: 'contain'
                                    },
                                    pb: 8,
                                }}
                            >
                                <RealcoinGreenIcon />
                            </Box>
                            {isVerifyToken ?
                                <form onSubmit={handleSubmit(handleChangePass)}>
                                    <Box
                                        sx={{
                                            textAlign: 'center',
                                            '.t-1': {
                                                fontSize: [20, 20, 40, 40, 40],
                                                fontWeight: 700,
                                            },
                                            '.t-2': {
                                                fontSize: 16,
                                                fontWeight: 600,
                                            },
                                            pb: 5,
                                            whiteSpace: 'pre-wrap'
                                        }}
                                    >
                                        <div className="t-1">{t('Reset Password')}</div>
                                    </Box>

                                    <Stack direction='column' spacing={3} width='100%' pb={3}>
                                        <InputForm
                                            id='password'
                                            label={t('New Password')}
                                            placeholder={t('Enter your password')}
                                            register={formRegister.password}
                                            type={showPassword?.password ? "text" : "password"}
                                            error={errors.password?.message}
                                            endAdornment={<BtnShowPass value="password" />}
                                            note={initNote}
                                        />

                                        <InputForm
                                            id='re_password'
                                            label="Re-type New Password"
                                            placeholder={t('Enter your re-type password')}
                                            register={formRegister.re_password}
                                            type={showPassword?.re_password ? "text" : "password"}
                                            error={errors.re_password?.message}
                                            endAdornment={<BtnShowPass value="re_password" />}
                                        />
                                    </Stack>
                                    <Box width='100%' pb={3}>
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                color: 'red',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {error || ''}
                                        </Typography>
                                    </Box>

                                    <Stack direction='column' width='100%' spacing={2} pb={5}>
                                        <ButtonBase
                                            sx={{
                                                fontSize: 16,
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                color: '#fff',
                                                background: '#22AD01',
                                                borderRadius: '13px',
                                                width: '100%',
                                                height: 50,
                                            }}
                                            type="submit"

                                        >
                                            {t('Submit')}
                                        </ButtonBase>

                                    </Stack>

                                    <Stack direction='row' alignItems='center' spacing={1}
                                        sx={{
                                            fontSize: 16,
                                            color: '#898989'
                                        }}
                                    >
                                        <div>{t('Don\'t have account')}?</div>
                                        <ButtonBase
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: 16,
                                                color: '#22AD01',
                                            }}
                                            onClick={() => router.push('/login/register')}
                                        >
                                            {t('Sign Up here')}
                                        </ButtonBase>
                                    </Stack>
                                </form>
                                :
                                <>
                                    <Box
                                        sx={{
                                            textAlign: 'center',
                                            '.t-1': {
                                                fontSize: 40,
                                                fontWeight: 700,
                                            },
                                            '.t-2': {
                                                fontSize: 16,
                                                fontWeight: 600,
                                                pt: 3,
                                            },
                                            pb: 5,
                                            whiteSpace: 'pre-wrap'
                                        }}
                                    >
                                        <div className="t-1">{t('Expired Reset Password Link')}</div>
                                        <div className="t-2">{t('reset_pass_expired')}</div>
                                    </Box>

                                    <Stack direction='column' width='100%' spacing={2} pb={5}>
                                        <ButtonBase
                                            sx={{
                                                fontSize: 16,
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                color: '#fff',
                                                background: '#22AD01',
                                                borderRadius: '13px',
                                                width: '100%',
                                                height: 50,
                                            }}
                                            onClick={() => router.push('/login')}

                                        >
                                            {t('Login')}
                                        </ButtonBase>

                                    </Stack>
                                </>
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Fragment>
    )
}