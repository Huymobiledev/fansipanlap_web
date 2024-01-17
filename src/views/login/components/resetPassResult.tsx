import { EyeCloseIcon, EyeOpenIcon, GoogleIcon, SuccessIcon } from "@/components/icons/icons";
import { RealcoinGreenIcon } from "@/components/icons/logo";
import { Box, ButtonBase, Grid, IconButton, InputBase, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import router from 'next/router';
import OtpInput from 'react-otp-input';

export default function ViewResetPassSuccess(props: any) {

    const { t } = useTranslation()
    const [time, setTime] = useState(5)


    useEffect(() => {
        const timer1 = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
            }
        }, 1000)

        return (() => clearTimeout(timer1))
    })

    useEffect(() => {
        if (time === 0) {
            router.push('/')
        }
    }, [time])

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
                        pb: 3,
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    <div className="t-1">{t('Password Changed')}!</div>
                </Box>

                <Box width='100%' pb={3}
                    sx={{
                        textAlign: 'center',
                        '.note': {
                            fontSize: 12,
                            fontStyle: 'italic',
                            color: '#FF0000'
                        },
                        'svg': {
                            width: 190,
                            height: 190,
                            objectFit: 'contain',
                            mb: 2,
                        },
                        fontSize: 16,
                        'span': {
                            color: '#22AD01'
                        }

                    }}
                >
                    <SuccessIcon />
                    <div>Your password has been changed successfully, click the button below to return to the home page, or wait for <span>00:00:0{time}</span> to be automatically redirected to the home page.</div>

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
                        }}
                        onClick={() => router.push('/')}

                    >
                        {t('Go to Homepage')}
                    </ButtonBase>
                </Stack>

            </Stack>
        </Fragment>
    )
}