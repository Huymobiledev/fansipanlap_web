import { Box, Button, Container, Drawer, IconButton, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Fragment, useEffect, useState } from "react";
import Nav from "./components/nav";
import router from 'next/router';
import { checkUrl } from "@/utils";
import Link from "next/link";
import { useShowMediaUp } from "@/hooks/useResponse";
import LanguageItem from "../footer/languageItem";
import { MenuIcon } from "../icons/icons";
import MenuMobile from "./components/menuMobile";
// import { useSpring, animated } from 'react-spring';

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

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)
    useEffect(() => {
        setIsOnMobile(window.innerWidth > 770 ? false : true)
    })



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
                    background: '#FB471E',
                    //backdropFilter: 'blur(5px)',
                    position: 'fixed',
                    zIndex: 1000,
                    top: 0,
                    width: '100vw',
                    display: 'flex',       // Add display: flex
                    alignItems: 'center',
                    height: isOnMobile ? 40 : 50
                }}
            >
                <Container maxWidth='xxl'
                    sx={{
                        //px: [1, 1, 2, 2, 2],
                        //border: '1px solid #333',


                    }}
                >
                    <Stack direction='row' justifyContent='space-between' alignItems='right' spacing={1} width='100%'
                        sx={{
                            height: [60, 60, 60, 60, 60],
                            minHeight: [60, 60, 60, 60, 60],
                            color: isDark ? '#000' : '#fff',
                            width: isOnMobile ? '100%' : '88%'
                        }}
                    >
                        <Stack direction='row' alignItems='right' spacing={5} height='100%'>
                            <Box
                                sx={{
                                    ml: isOnMobile ? -3 : 10,
                                    height: [30],
                                    minHeight: [30],
                                    'img': {
                                        width: '80%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        position: 'relative',
                                        top: '50%',
                                    },
                                    textAlign: 'center',
                                    justifyItems: 'center',
                                }}

                            >
                                <img src={isDark ? '/assets/icons/logo-dark.png' : "/assets/icons/logo.png"} alt='logo' />
                            </Box>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={[1, 1, 2, 2, 2]} height='100%'
                            sx={{
                                mr: isOnMobile ? 0 : 40
                            }}>
                            {!isOnMobile && <Nav isDark={isDark} />}
                            <Box
                                sx={{
                                    display: isBg ? 'flex' : 'none',
                                    position: 'fixed',
                                    background: '#FB471E',
                                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '50%',
                                    width: 36,
                                    height: 36,
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    bottom: 10,
                                    right: 10,
                                    ':hover': {
                                        background: '#fc7353'
                                    },
                                    'img': {
                                        width: 16,
                                        height: 11,
                                        m: 'auto'
                                    }


                                }}
                                onClick={scrollToTop}
                            >
                                <img src='/assets/icons/Polygon_1.svg'></img>
                            </Box>
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
                            <LanguageItem isDark={isDark} />

                        </Stack>
                    </Stack>
                </Container>

            </Box>
            {openMenu && <MenuMobile onClose={() => setOpenMenu(false)} />}


            {/* <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right"
                sx={{
                    '.MuiPaper-root': {
                        p: 3,
                        minWidth: '60vw',
                        zIndex: 999
                    }
                }}
                
            >
                <MenuMobile onClose={() => setOpenMenu(false)} />
            </Drawer> */}
        </Fragment>
    );
}