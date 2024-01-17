import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import { Box, Dialog, Popover, Stack, Typography } from "@mui/material";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import moment from "moment";

export default function LanguageItem(props: any) {
    const { isMini, isDark } = props
    const { appConfig } = useAppSelector(appConfigSelector)
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const [lang, setLang] = useState('en')
    const { t, i18n } = useTranslation()

    useEffect(() => {
        setLang(localStorage.getItem('i18nextLng') || router.locale || 'en')
    }, [router.locale])

    const changeLanguageHandler = (lang: any) => {
        handleClose()
        i18n.changeLanguage(lang)
    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLanguageChange = (item: any) => {
       /*  if (router.asPath.startsWith('/news/')) {
            const links = JSON.parse(localStorage.getItem('news_link_array') || '') as any[]
            const re_link = links.find((v: any) => v.lang === item.code)
            console.log('rel',re_link)
            if (re_link) {
                const slug = String(re_link?.link).split('/')?.at(-1)
                router.replace(`/news/${slug}`, undefined, { locale: item.code })
            } else {
                router.push('/news')
            }
        } */
        changeLanguageHandler(item.code)
    }

    const langItem = appConfig?.languages.filter(v => v.code === lang)[0]

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={.5}
                sx={{
                    height: 30,
                    px: .3,
                    py: .3,
                    borderRadius: '59px',
                    border: `1px solid ${isDark ? '#000' : '#fff'}`,
                    cursor: 'pointer',
                    minWidth: 65,
                }}
                onClick={handleClick}
            >
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}
                    sx={{
                        height: 24,
                        width: 24,
                        minWidth: 24,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        'img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                        'svg': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }
                    }}
                >
                    {langItem ?
                        <img src={langItem.image} alt='' />
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="800px" width="800px" version="1.1" id="XMLID_275_" viewBox="0 0 24 24" >
                            <g id="language">
                                <g>
                                    <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z     M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3    z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3    S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12    S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5    C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z" />
                                </g>
                            </g>
                        </svg>
                    }
                </Stack>
                <Typography
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textTransform: 'uppercase',
                        fontSize: [12, 12, 14, 14, 14],
                        pr: 1,
                        'svg': {
                            width: 24,
                            height: 24,
                            maxHeight: 24,
                            objectFit: 'contain',
                            mr: 1,
                        }
                    }}
                >
                    {langItem?.code}
                </Typography>

            </Stack >
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    '.MuiPaper-root': {
                        mt: 1,
                        boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.05)',
                        background: '#fff',
                        borderRadius: '13px',
                        p: 1,
                    }
                }}
            >
                <Box
                    sx={{
                        //background: 'rgba(255, 255, 255, 0.55)',
                        //borderRadius: '20px',
                        minHeight: 100,
                    }}
                >
                    {open && appConfig?.languages?.map((item, index) => (
                        <Link key={index}
                            href='#'
                            locale={item.code}
                        >
                            <Box key={index}
                                onClick={() => { handleLanguageChange(item) }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    px: 1,
                                    py: 1,
                                    ':hover': {
                                        background: 'rgba(0, 0, 0, 0.2)',
                                    },
                                    //background: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: '13px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >

                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            minWidth: 24,
                                            borderRadius: '50%',
                                            boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
                                            overflow: 'hidden',
                                            '& img': {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            },
                                            marginRight: 1.1,
                                        }}
                                    >
                                        <img src={item.image} alt="" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            color: 'inherit',
                                            fontWeight: 500,
                                            marginRight: '3rem',
                                        }}
                                        noWrap
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: item.code === lang ? 'block' : 'none',
                                        width: 24,
                                        height: 24,
                                        minWidth: 24,
                                        '& img': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {<img src='/assets/icons/icon-check.svg' alt="" />}
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Box>
            </Popover>
        </Fragment>
    );
}