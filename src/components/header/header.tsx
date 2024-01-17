import { Box, Button, Container, Drawer, IconButton, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Fragment, useEffect, useState } from "react";
import Nav from "./components/nav";
import router from 'next/router';
import { checkUrl } from "@/utils";
import Link from "next/link";
import { showMediaUp } from "@/hooks/useResponse";
import LanguageItem from "../footer/languageItem";
import { MenuIcon } from "../icons/icons";
import MenuMobile from "./components/menuMobile";

export const noHeaderUrl = [
    '/login*',
    '/forget-password*'
]

const CustomOutlinedButton = styled(Button)({
    border: '1px solid inherit',
    borderRadius: '59px',
    height: '30px',
    color: 'inherit',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: 'inherit',
        border: '1px solid inherit',
    },
});


export default function Header() {

    const [isBg, setIsBg] = useState(false);

    const [openMenu, setOpenMenu] = useState(false)

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js


    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const darkUrl = [
        '/new*',
        // '/service*',
        //'/about-us*'
    ]

    const isDark = checkUrl(router.pathname, darkUrl)

    useEffect(() => {

        function checkScroll() {
            //console.log(window.scrollY)
            if (window.scrollY >= 10) {
                setIsBg(true)
            }
            if (window.scrollY === 0) {
                setIsBg(false)
            }
        }
        window.addEventListener("scroll", checkScroll);
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", checkScroll);
    }, [])


    if (checkUrl(router.pathname, noHeaderUrl)) {
        return <></>
    }

    return (
        <Fragment>
            <Box
                sx={{
                    background: isBg ? (isDark ? '#fff' : '#000') : (isDark ? 'rgba(255, 255, 255, 0.0)' : 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(4,17,29,0.6) 62%)'),
                    //backdropFilter: 'blur(5px)',
                    position: 'fixed',
                    zIndex: 1000,
                    top: 0,
                    width: '100vw'
                }}
            >
                <Container maxWidth='xxl'
                    sx={{
                        //px: [1, 1, 2, 2, 2],
                        //border: '1px solid #333',


                    }}
                >
                    <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} width='100%'
                        sx={{
                            height: [60, 60, 60, 60, 60],
                            minHeight: [60, 60, 60, 60, 60],
                            color: isDark ? '#000' : '#fff',
                            width: '100%'
                        }}
                    >
                        <Stack direction='row' alignItems='center' spacing={5} height='100%'>
                            <Link href={'/'}>
                                <Box
                                    sx={{
                                        ml:[-1, -1, -1.5, -1.5, -1.5],
                                        height: [30, 30, 44, 44, 44],
                                        minHeight: [30, 30, 44, 44, 44],
                                        'img': {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }
                                    }}
                                >
                                    <img src={isDark ? '/assets/icons/logo-dark.png' : "/assets/icons/logo.png"} alt='logo' />
                                </Box>
                            </Link>
                            {showMediaUp('md') &&
                                <Nav isDark={isDark} />
                            }

                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={[1, 1, 2, 2, 2]} height='100%'>
                            <CustomOutlinedButton variant="outlined" href="#"
                                color="inherit"
                                sx={{
                                    display: {
                                        xs: 'none',
                                        md: 'flex'
                                    },
                                    fontSize: 14,
                                }}
                            >
                                Sport Exchange
                            </CustomOutlinedButton>

                            <LanguageItem isDark={isDark} />
                            <IconButton
                                sx={{
                                    display: {
                                        xs: 'auto',
                                        md: 'none'
                                    },
                                    color: 'inherit'
                                }}
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>

            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    bottom: [10, 10, 30, 30, 30],
                    right: [10, 10, 30, 30, 30],
                    zIndex: 10000
                }}
            >
                <IconButton
                    sx={{
                        display: isBg ? 'auto' : 'none',
                        background: '#22AD01',
                        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                        width: 36,
                        height: 36,
                        ':hover': {
                            background: '#79e866'
                        }
                    }}
                    onClick={scrollToTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M16.4998 12.8565L10.5748 18.7815C10.2919 19.0547 9.91298 19.2059 9.51968 19.2025C9.12639 19.1991 8.75017 19.0413 8.47205 18.7632C8.19394 18.4851 8.03619 18.1089 8.03277 17.7156C8.02935 17.3223 8.18055 16.9434 8.45378 16.6605L16.9393 8.175C17.0783 8.03522 17.2435 7.9243 17.4255 7.84861C17.6075 7.77291 17.8027 7.73395 17.9998 7.73395C18.1969 7.73395 18.3921 7.77291 18.5741 7.84861C18.7561 7.9243 18.9213 8.03522 19.0603 8.175L27.5458 16.6605C27.8123 16.9447 27.9577 17.3214 27.9514 17.7109C27.9451 18.1004 27.7875 18.4722 27.5119 18.7476C27.2363 19.023 26.8644 19.1803 26.4749 19.1864C26.0854 19.1924 25.7088 19.0467 25.4248 18.78L19.4998 12.855V27.234C19.4998 27.6318 19.3417 28.0134 19.0604 28.2947C18.7791 28.576 18.3976 28.734 17.9998 28.734C17.602 28.734 17.2204 28.576 16.9391 28.2947C16.6578 28.0134 16.4998 27.6318 16.4998 27.234V12.855V12.8565Z" fill="white" />
                    </svg>
                </IconButton>
            </Box>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right"
                sx={{
                    '.MuiPaper-root': {
                        p: 3,
                        minWidth: '60vw',
                    }
                }}
            >
                <MenuMobile onClose={() => setOpenMenu(false)} />
            </Drawer>
        </Fragment>
    );
}