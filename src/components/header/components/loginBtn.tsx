import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import router from 'next/router';
import { useAppSelector } from "@/hooks/hooks";
import { userSelector } from "@/slices/userSlice";


export default function LoginButton(props: any) {
    const { t } = useTranslation();
    const { isLoggedIn } = useAppSelector(userSelector)

    if (isLoggedIn) {
        return <></>
    }
    return (
        <Fragment>
            <Stack spacing={1} direction='row' justifyContent='center' alignItems='center'
                sx={{
                    background: '#22AD01',
                    //border: '2px solid #fff',
                    color: '#fff',
                    boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '21px',
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 15px',
                    cursor: 'pointer'
                }}
                onClick={() => router.push('/login')}
            >

                <Typography noWrap
                    sx={{
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: 1.2,
                    }}
                >
                    {t('Sign Up/ Login')}
                </Typography>

            </Stack>
        </Fragment>
    );
}
