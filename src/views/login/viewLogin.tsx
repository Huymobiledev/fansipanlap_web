import { EyeCloseIcon, EyeOpenIcon, GoogleIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, CircularProgress, Grid, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import router from 'next/router';
import { useForm } from "react-hook-form";
import { loginAPI, loginGoogleAPI, resendVerifyCodeAPI } from "@/api/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { login, userSelector } from "@/slices/userSlice";
import ConfirmDialog from "@/components/dialog/confirmDialog";
import { useGoogleLogin } from '@react-oauth/google';
import LoadingDialog from "@/components/dialog/loadingDialog";
import { el } from "date-fns/locale";

type FormData = {
    email: string;
    password: string;
};

export default function ViewLogin(props: any) {
    const { t } = useTranslation()
    const { register, getValues, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState(false)
    const [pending, setPending] = useState(false)
    const dispatch = useAppDispatch()
    const [error, setError] = useState('')
    const [info, setInfo] = useState('')
    const { isLoggedIn, user } = useAppSelector(userSelector)
    const {_cb} = router.query

    const formRegister = {
        email: register('email', {
            required: {
                value: true,
                message: 'Email not empty'
            }
        }),
        password: register('password', {
            required: {
                value: true,
                message: 'Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9'
            },
            minLength: {
                value: 6,
                message: 'Password length > 6'
            }
        }),

    }

    const BtnShowPass = () => {
        return (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
                {!showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </IconButton>
        )
    }


    const handleLogin = async (data: any, e: any) => {
        e.preventDefault()
        setPending(true)
        try {
            const rs = await loginAPI(data)
            if (rs.success) {
                setError(t(''))
                dispatch(login(rs.data))
                if (rs?.data?.user?.email_verified === false) {
                    setInfo(`Please verify your email address:\n${data?.email}`)
                }else{
                    router.push(_cb as string || '/')
                }
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setPending(false)
        }
    }

    const handleConfirmVerifyEmail = async () => {
        if (!isLoggedIn) {
            return
        }
        const email = getValues('email')
        try {
            const rs = await resendVerifyCodeAPI(email)
            if (rs?.success) {
                router.push(`/login/register?reg_step=verify-email&email=${getValues('email')}`)
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setInfo('')
        }
    }

    const loginGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse)
            setPending(true)
            try {
                const rs = await loginGoogleAPI(tokenResponse?.access_token)
                if (rs.success) {
                    setError(t(''))
                    dispatch(login(rs.data))
                    router.push('/')
                } else {
                    setError(rs?.error?.message)
                }
            } catch (e) {
                console.log(e)
            } finally {
                setPending(false)
            }
        },
    });

    return (
        <Fragment>
            <LoadingDialog open={pending} />
            <ConfirmDialog
                open={info !== '' && error === ''}
                onClose={() => setInfo('')}
                info={info}
                onConfirm={handleConfirmVerifyEmail}
            />
            <Stack direction='row' justifyContent='center' alignItems='center' width='100%' height='100%'
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    pb: 10,
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
                            minHeight: '100vh',
                            py: 4,
                        }}
                    >
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <Stack direction='column' alignItems='center' justifyContent='center'
                                sx={{
                                    px: [2, 2, 10, 10, 10],
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer'
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
                                    onClick={() => router.push('/')}
                                >
                                    <RealcoinGreenIcon />
                                </Box>
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
                                    }}
                                >
                                    <div className="t-1">{t('Welcome to Realcoin!')}</div>
                                    <div className="t-2">{t('Hello! Please Sign In to continue')}</div>
                                </Box>

                                <Box width='100%' pb={3}
                                    sx={{
                                        '.note': {
                                            fontSize: 12,
                                            fontStyle: 'italic',
                                            color: '#898989'
                                        }
                                    }}
                                >
                                    <div>{t('E-mail')}:</div>
                                    <InputBase fullWidth
                                        placeholder={t('Enter your mail address')}
                                        id="email"
                                        type="email"
                                        autoFocus={true}
                                        {...formRegister.email}
                                        sx={{
                                            my: .5,
                                            borderRadius: '10px',
                                            border: '1px solid #D7D7D7',
                                            fontSize: 14,
                                            height: 50,
                                            px: 1.5,
                                        }}
                                    />
                                    <div className="note">{t(errors?.email?.message || '')}</div>
                                </Box>

                                <Box width='100%' pb={2}
                                    sx={{
                                        '.note': {
                                            fontSize: 12,
                                            fontStyle: 'italic',
                                            color: '#898989'
                                        }
                                    }}
                                >
                                    <div>{t('Password')}:</div>
                                    <InputBase fullWidth
                                        placeholder={t('Enter your password')}
                                        endAdornment={<BtnShowPass />}
                                        id='password'
                                        type={showPassword ? "text" : "password"}
                                        {...formRegister.password}
                                        sx={{
                                            my: .5,
                                            borderRadius: '10px',
                                            border: '1px solid #D7D7D7',
                                            fontSize: 14,
                                            height: 50,
                                            px: 1.5,
                                        }}
                                    />
                                    <div className="note">{t(errors?.password?.message || '')}</div>
                                </Box>

                                <Box width='100%' pb={2}>
                                    <Stack direction='row' width='100%' justifyContent='flex-end'>
                                        <ButtonBase
                                            sx={{
                                                color: '#22AD01',
                                                fontStyle: 'italic',
                                                fontSize: 16,
                                            }}
                                            onClick={() => router.push('/forget-password')}
                                        >
                                            {t('Forgot password ?')}
                                        </ButtonBase>
                                    </Stack>

                                </Box>
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
                                        disabled={pending}

                                    >
                                        {t('Sign in')}
                                    </ButtonBase>

                                    <ButtonBase
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            color: '#000',
                                            background: '#fff',
                                            border: '1px solid #D7D7D7',
                                            borderRadius: '13px',
                                            width: '100%',
                                            height: 50,
                                            px: 1.5,
                                        }}
                                        onClick={() => loginGoogle()}
                                        disabled={pending}
                                    >
                                        <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'
                                            sx={{
                                                'svg': {
                                                    with: 24,
                                                    height: 24,
                                                    objectFit: 'contain'
                                                }
                                            }}
                                        >
                                            <GoogleIcon />
                                            <div>{t('Sign in with Google')}</div>
                                            <Box width={24}></Box>
                                        </Stack>
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
                            </Stack>
                        </form>
                    </Grid>
                </Grid>
            </Stack>
        </Fragment>
    )
}