import { EyeCloseIcon, EyeOpenIcon, GoogleIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, Grid, IconButton, InputBase, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import router, { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import InputForm from "./components/input";
import ViewVerifyEmailStep from "./components/verifyEmail";
import { IPropsRegister, registerAPI } from "@/api/auth";
import LoadingDialog from "@/components/dialog/loadingDialog";
import { ErrorDialog } from "@/components/dialog/errorDialog";
import { useAppDispatch } from "@/hooks/hooks";
import { login } from "@/slices/userSlice";
import { isValidPassword } from "@/utils";

type FormData = {
    firstname: string,
    lastname: string,
    email: string;
    password: string;
    confirmPassword: string;
};

enum stepRegister {
    STEP_1 = 'load-info',
    STEP_2 = 'verify-email',
}

export default function ViewRegister(props: any) {
    const { t } = useTranslation()
    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState<any>({
        password: false,
        confirmPassword: false
    })
    const [step, setStep] = useState(stepRegister.STEP_1)
    const [dataReg, setDataReg] = useState<FormData>()
    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')

    const router = useRouter()
    const dispatch = useAppDispatch()

    const { reg_step, email } = router.query

    const [initNote, setInitNote] = useState('Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9')

    const formRegister = {
        firstname: register('firstname', {
            required: {
                value: true,
                message: 'This field is required.'
            }
        }),
        lastname: register('lastname', {
            required: {
                value: true,
                message: 'This field is required.'
            }
        }),
        email: register('email', {
            required: {
                value: true,
                message: 'This field is required.'
            }
        }),
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
        confirmPassword: register('confirmPassword', {
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
    useEffect(() => {
        if (errors.password || errors.confirmPassword) {
            setInitNote('')
        }
    }, [errors])

    useEffect(() => {
        if (reg_step) {
            if(!dataReg){
                setDataReg({
                    firstname: '',
                    lastname: '',
                    email: email as string,
                    password: '',
                    confirmPassword: ''
                })
            }
            setStep(reg_step as stepRegister)
        }else{
            setStep(stepRegister.STEP_1)
        }
    }, [router])

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

    const handleRegister = async (data: FormData) => {
        setPending(true)
        try{
            const dt: IPropsRegister = {
                first_name: data.firstname,
                last_name: data.lastname,
                email: data.email,
                password: data.password,
                re_password: data.confirmPassword
            }
            const rs = await registerAPI(dt)
            if(rs.success){
                setDataReg(rs.data)
                router.push(`/login/register?reg_step=${stepRegister.STEP_2}`)
            }else{
                setError(rs?.error?.message)
            }
        }catch(e){
            console.log(e)
        }finally{
            setPending(false)
        }
        
    }
    const handleUpdateVerifySuccess = () =>{
        dispatch(login(dataReg))
    }

    return (
        <Fragment>
            <LoadingDialog open={pending}/>
            <ErrorDialog 
                open={error !==''}
                onClose={() => setError('')}
                info={error}
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
                            py: 5,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: step === stepRegister.STEP_1 ? 'auto' : 'none',
                            }}
                        >
                            <form onSubmit={handleSubmit(handleRegister)}>
                                <Stack direction='column' alignItems='center' justifyContent='center'
                                    sx={{
                                        px: [2, 2, 8, 8, 8],
                                        width: '100%',
                                        height: '100%',
                                        '.note-2': {
                                            fontSize: 12,
                                            fontStyle: 'italic',
                                            color: '#898989'
                                        }
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
                                        <div className="t-1">{t('Create New Account')}</div>
                                        <div className="t-2">{t('General Information')}</div>
                                    </Box>

                                    <Stack direction='column' spacing={3} width='100%' pb={3}>
                                        <InputForm
                                            id='firstname'
                                            label="First Name"
                                            placeholder="Enter your first name"
                                            register={formRegister.firstname}
                                            type="text"
                                            error={errors.firstname?.message}
                                            endAdornment={<></>}
                                            note=""
                                        />

                                        <InputForm
                                            id='lastname'
                                            label="Last Name"
                                            placeholder="Enter your last name"
                                            register={formRegister.lastname}
                                            type="text"
                                            error={errors.lastname?.message}
                                            endAdornment={<></>}
                                            note=""
                                        />

                                        <InputForm
                                            id='email'
                                            label="E-mail"
                                            placeholder="Enter your mail address"
                                            register={formRegister.email}
                                            type="email"
                                            error={errors.email?.message}
                                            endAdornment={<></>}
                                            note=""
                                        />

                                        <InputForm
                                            id='password'
                                            label="Password"
                                            placeholder="Enter your password"
                                            register={formRegister.password}
                                            type={showPassword?.password ? "text" : "password"}
                                            error={errors.password?.message}
                                            endAdornment={<BtnShowPass value="password" />}
                                            note={initNote}
                                        />

                                        <InputForm
                                            id='confirmPassword'
                                            label="Re-type Password"
                                            placeholder="Enter your password"
                                            register={formRegister.confirmPassword}
                                            type={showPassword?.confirmPassword ? "text" : "password"}
                                            error={errors.confirmPassword?.message}
                                            endAdornment={<BtnShowPass value="confirmPassword" />}
                                        />
                                    </Stack>


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
                                            {t('Register')}
                                        </ButtonBase>

                                    </Stack>

                                    <Stack direction='row' alignItems='center' spacing={1}
                                        sx={{
                                            fontSize: 16,
                                            color: '#898989'
                                        }}
                                    >
                                        <div>{t('Already have an account')}?</div>
                                        <ButtonBase
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: 16,
                                                color: '#22AD01',
                                            }}
                                            onClick={() => router.push('/login')}
                                        >
                                            {t('Login here')}
                                        </ButtonBase>
                                    </Stack>
                                </Stack>
                            </form>
                        </Box>

                        {/* Step 2: verify email */}
                        {step === stepRegister.STEP_2 &&
                            <ViewVerifyEmailStep data={dataReg} onUpdate={handleUpdateVerifySuccess} />
                        }

                    </Grid>
                </Grid>
            </Stack>


        </Fragment>
    )

}