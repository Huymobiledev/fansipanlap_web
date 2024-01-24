import { EyeCloseIcon, EyeOpenIcon, GoogleIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, Grid, IconButton, InputBase, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import router from 'next/router';
import OtpInput from 'react-otp-input';
import ViewRegResultStep from "./regResult";
import LoadingDialog from "@/components/dialog/loadingDialog";
import { ErrorDialog } from "@/components/dialog/errorDialog";
import { resendVerifyCodeAPI, verifyEmailAPI } from "@/api/auth";

export default function ViewVerifyEmailStep(props: any) {

    const { data, onUpdate } = props
    const { t } = useTranslation()
    const [code, setCode] = useState('')
    const [result, setResult] = useState<any>(undefined)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')
    const [time, setTime] = useState(30)


    const handleVerify = async () => {
        setPending(true)
        try {
            const rs = await verifyEmailAPI(data?.access_token, code)
            if (rs.success) {
                onUpdate()
                setResult(data)
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setPending(false)
        }

    }

    const handleResendCode = async () => {
        if(time > 0){
            setError('Please wait at least 30 seconds before requesting another Code')
            return
        }
        setPending(true)
        try {
            const rs = await resendVerifyCodeAPI(data?.user?.email)
            if (rs.success) {
                setTime(30)
                setError(t('Verification code was resent successfully'))
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
        const timer1 = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
            }
        }, 1000)

        return (() => clearTimeout(timer1))
    })

    if (!data) {
        return (
            <Fragment>

                <Stack direction='column' alignItems='center' justifyContent='center'
                    sx={{
                        px: 8,
                        width: '100%',
                        height: '100%',
                    }}
                >
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
                            },
                            pb: 5,
                            whiteSpace: 'pre-wrap'
                        }}
                    >
                        <div className="t-1">{t('Data Not Found')}</div>
                        <div className="t-2">{t('Please back to home')}</div>
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
                            onClick={() => router.back()}

                        >
                            {t('Back')}
                        </ButtonBase>

                    </Stack>
                </Stack>
            </Fragment>
        )
    }

    if (result) {
        return <ViewRegResultStep data={result} />
    }

    return (
        <Fragment>
            <LoadingDialog open={pending} />
            <ErrorDialog
                open={error !== ''}
                onClose={() => setError('')}
                info={error}
            />
            <Stack direction='column' alignItems='center' justifyContent='center'
                sx={{
                    px: 8,
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
                <Box
                    sx={{
                        textAlign: 'center',
                        '.t-1': {
                            fontSize: 40,
                            fontWeight: 700,
                        },
                        '.t-2': {
                            fontSize: 16,
                            fontWeight: 500,
                        },
                        '.bold': {
                            fontWeight: 700
                        },
                        pb: 5,
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    <div className="t-1">{t('Verify your Email Address')}</div>
                    <div className="t-2">{t('A verification code has been sent to')}</div>
                    <div className="t-2 bold">{data?.user?.email}</div>
                </Box>

                <Box width='100%' pb={3}
                    sx={{
                        textAlign: 'center',
                        '.note': {
                            fontSize: 12,
                            fontStyle: 'italic',
                            color: '#FF0000'
                        },

                    }}
                >
                    <div>{t('Please check your email address and enter the verification code in field below to complete your register!')}</div>
                    <Box
                        sx={{
                            '.inputStyle': {
                                width: '40px !important',
                                height: 50,
                                margin: '0px 10px',
                                fontSize: 16,
                                borderRadius: '10px',
                                border: '1px solid #898989'
                            },
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            py: 3,
                        }}
                    >
                        {/* <OtpInput
                            inputStyle="inputStyle"
                            value={code}
                            onChange={setCode}
                            numInputs={6}
                            shouldAutoFocus
                        /> */}
                    </Box>

                    <div className="note">{t('')}</div>
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
                            ':disabled': {
                                opacity: 0.2
                            }
                        }}
                        onClick={handleVerify}
                        disabled={!code || code.length < 6}
                    >
                        {t('Verify')}
                    </ButtonBase>

                </Stack>

                <Stack direction='row' alignItems='center' spacing={1}
                    sx={{
                        fontSize: 16,
                        color: '#898989'
                    }}
                >
                    <div>{t('Didn\'t receive a code ?')}?</div>
                    <ButtonBase
                        sx={{
                            fontWeight: 700,
                            fontSize: 16,
                            color: '#22AD01',
                        }}
                        onClick={handleResendCode}
                    >
                        {t('Resend code')}{time > 0 && ' (' + time + 's)'}
                    </ButtonBase>
                </Stack>
            </Stack>
        </Fragment>
    )
}