import { COLOR } from "@/constant/common";
import { Box, ButtonBase, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Fragment, useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DiscordSvgIcon, FacebookSvgIcon, TeleSvgIcon, XSvgIcon, YoutubeSvgIcon } from "../icons/socials";
import router from 'next/router';
import { noHeaderUrl } from "../header/header";
import { checkUrl, getBackgroundColor } from "@/utils";
import LanguageItem from "./languageItem";
import Link from "next/link";


const BulletSvgIcon = () => (
    <svg
    className="svg-bullet"
    style={{
      width: '8px',
      height: '12px',
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 12"
  >
    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" />
  </svg>

  );

export default function Footer() {
    const { t } = useTranslation()
    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)
    const [is4K, setIs4K] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600)
    setIs4K(window.innerWidth >= 2560)
},[window.innerWidth])



    const DrawLine = () => {
        const hrStyle: CSSProperties = {
            height: isOnMobile ? '1px' : '90%',
            width: isOnMobile ? '90vw' : '1px',
            backgroundColor: 'white',
            opacity: .3,
        }
        // if (isOnMobile) {
        //     return (<hr style={{opacity: .3, width: '50vw'}}></hr>)
        // }
        return (
            <div style={hrStyle}></div>
        )
    }

    if (checkUrl(router.pathname, noHeaderUrl)) {
        return <></>
    }

    return (
        <Box
                sx={{
                    maxWidth: '100vw',
                    width: '100vw',
                    color: 'white',
                    backgroundColor: '#FB471E',
                    justifyContent: 'center',
                    // px:  isOnMobile ? 0 : is4K ? 10 : '30px',
                    px:  isOnMobile ? 0 : is4K ? 50 : '30px',
                    overflowX: 'hidden'
                }}
            >
                <Grid container spacing={2} sx={{alignItems: 'center', justifyContent: 'space-between'}} m='auto'>
                    <Grid item xs={12} md={12}>
                        <Box 
                            sx = {{
                                mt: '90px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'left'

                            }}>
                            <img
                                src='/assets/icons/logo.png'
                                width={250}
                                alt='FANSIPAN-LAB'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} my={5}>
                        <Grid container spacing={2} sx={{
                    
                        }}>
                            <Grid item md={2.2} xs={12}>
                                <Typography variant='body2'
                                    sx = {{
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        mb: '10px',
                                        fontSize: '18px'
                                    }}
                                >
                                    Fansipan Labs CO., LTD
                                </Typography>
                                <Typography variant="body2"
                                    sx = {{
                                        justifyContent: 'left',
                                        display: 'inline-flex',
                                        gap: '5px',
                                        fontSize: '14px'
                                    }}
                                    
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.51212 15H8.1719C8.05949 14.0524 8 13.0445 8 12C8 10.9555 8.05949 9.94765 8.1719 9H3.51212C3.18046 9.93834 3 10.9481 3 12C3 13.0519 3.18046 14.0617 3.51212 15ZM3.93552 16C5.1259 18.3953 7.35208 20.1851 10.028 20.7833C9.24889 19.7228 8.65216 18.0371 8.31375 16H3.93552ZM20.4879 15C20.8195 14.0617 21 13.0519 21 12C21 10.9481 20.8195 9.93834 20.4879 9H15.8281C15.9405 9.94765 16 10.9555 16 12C16 13.0445 15.9405 14.0524 15.8281 15H20.4879ZM20.0645 16H15.6862C15.3478 18.0371 14.7511 19.7228 13.972 20.7833C16.6479 20.1851 18.8741 18.3953 20.0645 16ZM9.1844 15H14.8156C14.934 14.0624 15 13.0528 15 12C15 10.9472 14.934 9.93761 14.8156 9H9.1844C9.06598 9.93761 9 10.9472 9 12C9 13.0528 9.06598 14.0624 9.1844 15ZM9.33498 16C9.85717 18.9678 10.9181 21 12 21C13.0819 21 14.1428 18.9678 14.665 16H9.33498ZM3.93552 8H8.31375C8.65216 5.96286 9.24889 4.27722 10.028 3.21671C7.35208 3.81488 5.1259 5.60466 3.93552 8ZM20.0645 8C18.8741 5.60466 16.6479 3.81488 13.972 3.21671C14.7511 4.27722 15.3478 5.96286 15.6862 8H20.0645ZM9.33498 8H14.665C14.1428 5.03217 13.0819 3 12 3C10.9181 3 9.85717 5.03217 9.33498 8ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" fill="white"/>
                                    </svg>
                                    <a href="https://www.singsing.net">www.singsing.net</a>
                                </Typography>
                                <br></br>
                                <Typography variant="body2"
                                    sx = {{
                                        justifyContent: 'left',
                                        display: 'inline-flex',
                                        gap: '5px',
                                        fontSize: '14px'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19 8L14.618 11.2103C13.176 12.2632 10.81 12.2632 9.368 11.2103L5 8" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    contact@singsing.net
                                </Typography>
                            </Grid>
                            <Grid item md={.25} xs={12} alignItems={'center'}>
                                <DrawLine></DrawLine>
                            </Grid>
                            <Grid item md={2.2} xs={12} sx={{
                            }}>
                                <Typography variant='body2'
                                    sx = {{
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        left: 0,
                                        mb: '10px',
                                        fontSize: '18px'
                                    }}
                                >
                                    Singapore
                                </Typography>
                                <Typography variant='body2'
                                    sx = {{
                                            justifyContent: 'left',
                                            display: 'inline-flex',
                                            gap: '5px',
                                            fontSize: '14px'
                                    }}
                                >
                                    114 Lavender street <br></br>#11-83 CT HUB 2 SINGAPORE
                                </Typography>
                            </Grid>
                            <Grid item md={.25} xs={12}>
                                <DrawLine></DrawLine>
                            </Grid>
                            <Grid item md={2.2} xs={12}>
                                <Typography variant='body2'
                                    sx = {{
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        left: 0,
                                        mb: '10px',
                                        fontSize: '18px'
                                    }}
                                >
                                    Vietnam
                                </Typography>
                                <Typography variant='body2'
                                    sx = {{
                                            justifyContent: 'left',
                                            display: 'inline-flex',
                                            gap: '5px',
                                            fontSize: '14px'
                                    }}
                                >
                                    District 7 - HCMC
                                </Typography>
                            </Grid>
                            <Grid item md={.25} xs={12}>
                                <DrawLine></DrawLine>
                            </Grid>
                            <Grid item md={2.2} xs={12}>
                                <Typography variant='body2'
                                    sx = {{
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        left: 0,
                                        mb: '10px',
                                        fontSize: '18px'
                                    }}
                                >
                                    Philippines
                                </Typography>
                                <Typography variant='body2'
                                    sx = {{
                                            justifyContent: 'left',
                                            display: 'inline-flex',
                                            gap: '5px',
                                            fontSize: '14px'
                                    }}
                                >
                                    Manila
                                </Typography>
                            </Grid>
                            <Grid item md={.25} xs={12}>
                                <DrawLine></DrawLine>
                            </Grid>
                            <Grid item md={2.2} xs={12}>
                                <Typography variant='body2'
                                    sx = {{
                                        fontWeight: 600,
                                        textAlign: 'left',
                                        left: 0,
                                        mb: '10px',
                                        fontSize: '18px'
                                    }}
                                >
                                    Indonesia
                                </Typography>
                                <Typography variant='body2'
                                    sx = {{
                                            justifyContent: 'left',
                                            display: 'inline-flex',
                                            gap: '5px',
                                            fontSize: '14px'
                                    }}
                                >
                                    Bali
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )
}