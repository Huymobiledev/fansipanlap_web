import { forgotPasswordAPI } from "@/api/auth";
import { EyeCloseIcon, EyeOpenIcon, GoogleIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, Grid, IconButton, InputBase, Stack, Typography } from "@mui/material";
import router from "next/router";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ViewFogotPassword(props: any) {
    const { t } = useTranslation()
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState<any>(undefined)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setLoginData(prev => ({
                ...prev,
                [e.target.id]: e.target.value
            }))
        } catch (err) {
            console.log(err)
        }

    }

    const handleReset = async () => {
        setPending(true)
        try {
            const rs = await forgotPasswordAPI(loginData.email)
            if (rs.success) {
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

    return (
        <Fragment>
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
                                onClick={() => router.push('/')}
                            >
                                <RealcoinGreenIcon />
                            </Box>
                            {!result ?
                                <>
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
                                        <div className="t-1">{t('Forgot Password')}</div>
                                        <div className="t-2">{t('Please enter correct your email address,\nwe will sent you an email to reset your password.')}</div>
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
                                            onChange={handleChange}
                                            sx={{
                                                my: .5,
                                                borderRadius: '10px',
                                                border: '1px solid #D7D7D7',
                                                fontSize: 14,
                                                height: 50,
                                                px: 1.5,
                                            }}
                                        />
                                        <div className="note">{t('')}</div>
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
                                            onClick={handleReset}

                                        >
                                            {t('Reset password')}
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
                                </>
                                :
                                <>
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
                                                pt: 3,
                                            },
                                            pb: 5,
                                            whiteSpace: 'pre-wrap'
                                        }}
                                    >
                                        <div className="t-1">{t('Email Confirmation')}</div>
                                        <div className="t-2">{t('email_confirm_text', {value: loginData.email})}</div>
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
                                            onClick={() => router.push('/')}

                                        >
                                            {t('Back to Home')}
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