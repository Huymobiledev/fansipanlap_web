import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import { Box, Dialog, Popover, Stack, SvgIcon, Typography } from "@mui/material";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function LanguageItem(props: any) {
    const { isMini, isDark } = props
    const { appConfig } = useAppSelector(appConfigSelector)
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const [lang, setLang] = useState('VI')
    const { t, i18n } = useTranslation()

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)
})

    useEffect(() => {
        setLang(localStorage.getItem('i18nextLng') || router.locale || 'en')
    }, [router.locale])

    const changeLanguageHandler = (lang: any) => {
        handleClose()
        i18n.changeLanguage(lang)
    }

    const handleChangeLang = (event: any) => {
        
    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const handleLanguageChange = (item: any) => {
    //    /*  if (router.asPath.startsWith('/news/')) {
    //         const links = JSON.parse(localStorage.getItem('news_link_array') || '') as any[]
    //         const re_link = links.find((v: any) => v.lang === item.code)
    //         console.log('rel',re_link)
    //         if (re_link) {
    //             const slug = String(re_link?.link).split('/')?.at(-1)
    //             router.replace(`/news/${slug}`, undefined, { locale: item.code })
    //         } else {
    //             router.push('/news')
    //         }
    //     } */
    //     changeLanguageHandler(item.code)
    // }

    // const langItem = appConfig?.languages.filter(v => v.code === lang)[0]

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const langList = [
        {
            code: 'vi',
            image: '',
            name: 'VI'
        },
        {
            code: 'en',
            image: '',
            name: 'EN'
        }
    ]


    return (
        <Fragment>
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={.5}
                sx={{
                    height: isOnMobile ? 25 : 20,
                    px: .1,
                    py: .1,
                    borderRadius: '59px',
                    border: `1px solid ${isDark ? '#000' : '#fff'}`,
                    cursor: 'pointer',
                    minWidth: 20,
                    padding: 1,
                    backgroundColor: 'white',
                    color:'black',
                    'img': {
                        width: '30%',
                        objectFit: 'contain',
                        display:'inline-block'
                    }
                }}
                onClick={handleClick}
            >
                <Typography
                    sx={{
                        display: 'inline-block',
                        alignItems: 'right',
                        textTransform: 'uppercase',
                        fontSize: [9],
                        fontWeight: '700'
                    }}
                >
                    {lang}
                    {/* {langItem?.code} */}
                </Typography>
                <img src='/assets/icons/Polygon_3.svg'/>
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
                    {open && langList?.map((item: any, index: any) => (
                        <Link key={index}
                            href='#'
                            locale={item.code}
                        >
                            <Box key={index}
                                onClick={() => { setLang(item.code) }}
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
                                        {item?.image && <img src={item.image} alt="" />}
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
                                        // display: item.code === lang ? 'block' : 'none',
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