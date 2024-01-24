// import { ButtonGreen, ButtonOutline } from "@/components/button";
// import { EditIcon } from "@/components/icons/icons";
// import InputForm from "@/components/input/input";
// import InputGender from "@/components/input/inputGender";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { logout, userSelector } from "@/slices/userSlice";
import { formatDate } from "@/utils";
import { Box, ButtonBase, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import router from "next/router";
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import MenuList from "./components/menuList";
import EditProfile from "./components/editProfile";
import EditPassword from "./components/editPassword";
import { BtnEditAvatar } from "./components/btnChangeAvatar";

export enum editFunEnum {
    EDIT_PROFILE = 'profile',
    EDIT_PASSWORD = 'password'
}

export default function ViewProfile(props: any) {
    const { t } = useTranslation()
    const { isLoggedIn, user } = useAppSelector(userSelector)
    const { _fu } = router.query


    if (!isLoggedIn) {
        return (
            <Fragment>
                <Stack direction='column' alignItems='center' justifyContent='center'
                    sx={{
                        px: 8,
                        pt: 8,
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
    return (
        <Fragment>
            <Stack direction='row' justifyContent='center' alignItems='flex-start' width='100%' height='100%'
                sx={{
                    pt: 10,
                    width: '100%',
                    minHeight: '100vh',
                    background: `url(/assets/background/circle-4.svg) no-repeat`,
                }}
            >
                <Grid container maxWidth='lg' spacing={2}
                    sx={{
                        flexDirection: {
                            xs: 'column-reverse',
                            sm: 'column-reverse',
                            md: 'row'
                        }
                    }}
                >
                    <Grid item xs={12} mx={2}
                        sx={{
                            borderBottom: '1px solid #d7d7d7',
                            pb: 2,
                        }}
                    >
                        <Stack direction='row' alignContent='center' spacing={2}>
                            <Box
                                sx={{
                                    width: 50,
                                    minWidth: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    background: '#898989'
                                }}
                            >
                                <Image
                                    src={user?.avatar || '/assets/images/avatar.png'}
                                    alt="avatar"
                                    width={250}
                                    height={250}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                            <Stack direction='column'
                                sx={{
                                    'div:first-child': {
                                        fontSize: 20,
                                        fontWeight: 700
                                    },
                                    'div:nth-child(2)': {
                                        color: '#898989'
                                    }
                                }}
                            >
                                <div>{`${user.first_name} ${user.last_name}`}</div>
                                <div>{user?.email}</div>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item lg={3}>
                        <MenuList />
                    </Grid>
                    <Grid item lg={5}>
                        {(_fu === editFunEnum.EDIT_PROFILE || !_fu) &&
                            <EditProfile />
                        }
                        {(_fu === editFunEnum.EDIT_PASSWORD) &&
                            <EditPassword />
                        }
                    </Grid>
                    <Grid item lg={4} px={2}>
                        <Stack direction='column' spacing={2} alignItems='center'>
                            <Box
                                sx={{
                                    width: 250,
                                    minWidth: 250,
                                    height: 250,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    background: '#898989'
                                }}
                            >
                                <Image
                                    src={user?.avatar || '/assets/images/avatar.png'}
                                    alt="avatar"
                                    width={250}
                                    height={250}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                            <BtnEditAvatar/>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: '#898989',
                                    whiteSpace: 'pre-wrap',
                                    textAlign: 'center'
                                }}
                            >
                                {t('Maximum file size is 1 MB\nFormat: .JPEG, .PNG')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Fragment>
    )
}