import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import { useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import router from 'next/router';

const CustomButton = styled(Button)({
    color: 'white',
    borderRadius: '59px',
    padding: '0px 30px',
    backgroundColor: '#FB471E',
    height: '68px',
    fontSize: '22px',
    fontWeight: 600,
    gap: '10px',
    whiteSpace: 'nowrap',
    display: 'flex',
    textTransform: 'none',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: '#FB471E'
    },
    '& .MuiButton-endIcon': {
        margin: 0,
    },
        boxShadow: '0px 5px 10px 0px #FFFFFF33 inset',
    '&:active': {
        boxShadow: '0px 1px 1px 0px #FFFFFF80 inset',
    },
    '&:focus': {
        boxShadow: '0px 5px 5px 0px #0000001A',
    }
});



export default function Welcome(props: any) {

    const [data, setData] = useState<any>(undefined)
    const {appConfig} = useAppSelector(appConfigSelector)
    
    
    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)
    const [is4K, setIs4K] = useState<boolean>(false)
    

useEffect(() => {
    setIsOnMobile(window.innerWidth <= 425 ? true : false)
    setIs4K(window.innerWidth > 2560)
    console.log(window.innerWidth)
},[window.innerWidth])

    // useEffect(() => {
    //     if(appConfig && router.locale){
    //         setData(appConfig.home_contents[router.locale || ''])
    //     }
    // }, [router.locale, appConfig])

    const heading = data?.top?.heading || 'WEB3'
    // const intro = data?.top?.intro || 'We help to build and operate web3 projects for enterprises'
    const intro = 'We help to build and operate web3 projects for enterprises'

    const btnLink = {
        carbon_credit: data?.top?.carbon_credit || '#',
        contact_advisory: data?.top?.contact_advisory || '#',
        register_tranding: data?.top?.register_tranding || '#'
    }

    return (
        <Fragment>
            <Box
                sx={{
                    width: '100%',
                    background: `url(/assets/background/bg.png) no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                <Container
                    sx={{
                    color: 'white',
                    minHeight: '100vh',
                    display:'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%'
                }}
                >
                    <Stack sx={{
                        width: '100%',
                        display: 'flex',
                        flexGrow: 1,
                        height: '100%',
                        maxHeight: '150%',
                        pb: 5,
                        textAlign: {
                            xs: 'center',
                        },
                        px: {
                            md: 0,
                        }
                    }}>
                        
                        <Typography variant="h1" sx={{
                            display:'block',
                            font: 'Inter',
                            fontSize: `calc(${1}vw + 20px)`,
                            fontWeight: isOnMobile ? '700' : 600,
                            lineHeight: 1,
                            textAlign: 'center',
                            color: '#595959',
                            letterSpacing: 2,
                            mb: 2,
                            textShadow: isOnMobile ? '2px 2px 4px #00000033' : 'none'
                        }}>
                            WEB3
                            <br/>
                            TECHONOLOGY
                        </Typography>
                        <Grid container justifyContent={'center'} alignItems={'center'} gap={0}
                            sx={{
                                color: 'black',
                                fontWeight: 1000,
                                fontSize: `calc(${3}vw + 72px)`,
                                textAlign: 'center',
                                justifyContent: 'space-evenly',
                                lineHeight: .8,
                            }}
                        >
                            <Grid item xs={12} sm={4} md={.01} lg={.4} xl={3} display={'flex'} sx={{
                                justifyContent: 'center'
                            }}>
                                    MAKE
                                    
                            </Grid>
                            <Grid item xs={12} sm={4} md={.01} lg={.4} xl={3} display={'flex'} sx={{
                                justifyContent: 'center'
                            }}>
                                    EASY
                            </Grid>
                        </Grid>
                        
                        
                        <Typography 
                            variant="subtitle1" 
                            sx={{
                                display:'inline-block',
                                width: '100%',
                                font: 'Inter',
                                fontSize: isOnMobile ? '10px' : '20px',
                                fontWeight: '600',
                                lineHeight: '19px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color:'#363636',
                                mt: '10px'
                            }}>

                            We help to build and
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            sx={{
                                display:'inline-block',
                                width: '100%',
                                font: 'Inter',
                                fontSize: isOnMobile ? '10px' : '20px',
                                fontWeight: '600',
                                lineHeight: '19px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color:'#363636',
                                mt: '10px'
                            }}>

                            operate web3 projects for enterprises
                        </Typography>
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: 3.5
                            }}>
                                <CustomButton
                                // onClick={}
                                >
                                    Download portfolio
                                </CustomButton>
                            </Box>
                    </Stack>
                </Container>
            </Box>

        </Fragment>
    )
}