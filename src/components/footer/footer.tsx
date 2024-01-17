import { COLOR } from "@/constant/common";
import { Box, ButtonBase, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DiscordSvgIcon, FacebookSvgIcon, TeleSvgIcon, XSvgIcon, YoutubeSvgIcon } from "../icons/socials";
import router from 'next/router';
import { noHeaderUrl } from "../header/header";
import { checkUrl } from "@/utils";
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

    if (checkUrl(router.pathname, noHeaderUrl)) {
        return <></>
    }

    return (
        <Container maxWidth='xxl'
                sx={{
                    color: COLOR.White
                }}
            >
                <Box width='100%'
                    sx={{
                        background: '#04111D',
                        borderRadius: '10px 10px 0px 0px',
                        px: 5,
                        py: 10
                    }}
                >
                    <Stack direction='column' width='100%' gap={5}>
                        <Box textAlign={{
                            xs: 'center',
                            sm: 'center',
                            md: 'left'
                        }}>
                            <Image
                                        src='/assets/icons/logo-footer.png'
                                        width={180}
                                        height={74}
                                        alt='CCTPA'
                            />
                        </Box>
                        <Grid container spacing={5} 
                            sx={{
                                color: '#fff',
                                '.title': {
                                    fontSize: 20,
                                    fontWeight: 700
                                },
                                '.label': {
                                    color: '#D7D7D7',
                                    whiteSpace: 'nowrap',
                                    width: 100,
                                    minWidth: 100,
                                    display: { xs: 'none', sm: 'none', md: 'inherit' }
                                },
                                '.text': {
                                    mt: {
                                        xs: 1,
                                        sm: 1,
                                        md: 0
                                    }
                                },
                                '.email': {
                                    color: '#22AD01',
                                    fontStyle: 'italic'
                                },
                                '.note': {
                                    fontSize: 12,
                                    fontStyle: 'italic'
                                },
                                'ul': {
                                    px: 0,
                                    py: 0,
                                    my: .5,
                                    listStyleImage: 'none',
                                    listStyleType: 'none'
                                },
                                'li': {
                                    py: .5,
                                    '& .svg-bullet': {
                                        fill: '#fff',
                                        mr: .5
                                    },
                                    '&:hover': {
                                        color: '#22AD01',
                                        '& .svg-bullet': {
                                            fill: '#22AD01',
                                        }
                                    }
                                },
                                textAlign: {
                                    xs: 'center',
                                    sm: 'center',
                                    md: 'left'
                                }

                                
                            }}
                        >
                            <Grid item xl={7} lg={12} 
                                sx={{
                                    'div': {
                                        display: {
                                            xs: 'block',
                                            sm: 'block',
                                            md: 'flex'
                                        },
                                        justifyContent: 'flex-start',
                                    }
                                }}
                            >
                                <div className="title">CARBON CREDIT TRADING PLATFORM ASEAN JSC (CCTPA)</div>
                                <div>
                                    <div className="label">{t('Address')}:</div>
                                    <div className="text address">{t('20 Truong Dinh, Vo Thi Sau Ward, District 3, Ho Chi Minh City.')}</div>
                                </div>
                                <div>
                                    <div className="label">{t('Hotline')}:</div>
                                    <div className="text phone">(+84) 28 6272 5889</div>
                                </div>
                                <div>
                                    <div className="label">{t('Contact')}:</div>
                                    <div className="text email">contact@carbonasean.net</div>
                                </div>
                            </Grid>
                            <Grid item xl={2}  xs={12}>
                                <div className="title">{t('Company')}</div>
                                <ul>
                                    <li>
                                        <Link href="about-us">
                                            <BulletSvgIcon/> {t('About Us')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/news">
                                            <BulletSvgIcon/> {t('News')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <BulletSvgIcon/> {t('Services')}
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xl={3} lg={12}>
                                <div className="note">
                                    * Disclaimer: The Information Contained In This Website, Including The Historical Average APR, Are Intended For Informational Purposes Only. Some Of The Information May Be Dated And May Not Reflect The Most Current Information Or Interest Rates. Interest Rates Are Based On The Quality Of Individual Projects And Are Subject To Change Due To Market Conditions.
                                </div>
                                <Stack direction='row' spacing={2} alignItems='center' pt={2}
                                    sx={{
                                        'svg': {
                                            width: 36,
                                            height: 36,
                                            minWidth: 36,
                                        },
                                        display:{
                                            xs: 'block',
                                            sm: 'block'
                                        }
                                    }}
                                >
                                    <a href="#" target="_blank">
                                        <TeleSvgIcon />
                                    </a>
                                    <a href="#" target="_blank">
                                        <FacebookSvgIcon />
                                    </a>
                                    <a href="#" target="_blank">
                                        <DiscordSvgIcon />
                                    </a>
                                    <a href="#" target="_blank">
                                        <XSvgIcon />
                                    </a>
                                    <a href="#" target="_blank">
                                        <YoutubeSvgIcon />
                                    </a>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Container>
    )
}