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
                        width: '80vw',
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
                            fontWeight: 600,
                            lineHeight: 1,
                            textAlign: 'center',
                            color: '#595959',
                            letterSpacing: 2,
                            mb: 2,
                            textShadow: '2px 2px 4px #00000033'
                        }}>
                            WEB3
                            <br/>
                            TECHONOLOGY
                        </Typography>
                        <Grid container justifyContent={'space-between'} alignItems={'center'} gap={0}
                            sx={{
                                width: {
                                    xs: '100%',
                                    md: '100%',
                                },
                                maxWidth: {xs: '600px', lg: '750px', xl: '800'},
                                'svg' : {
                                    height: {
                                        xs : '70px',
                                        lg : '90px'
                                },

                                },
                                alignItems: 'center', 
                                justifyContent: 'space-between', 
                                m: 'auto',
                                my: 1
                            }}
                        >
                            <Grid item xs={12} md={6} sx={{
                                mb: 1,
                                height: {
                                    xs: '70px',
                                    md: '81px',

                                },
                            }}>
                        <Box width='100%' alignContent={'center'} justifyContent={'center'} sx={{
                            display: 'flex',
                        }}>
                            <Stack direction={'row'} m='auto' gap={.5} sx={{objectFit:'contain'}}>
                                <svg viewBox="0 0 153 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M152.721 0.035553V130.497H116.451V58.5121L91.8387 130.497H61.4901L36.6931 57.9569V130.497H0.422852V0.035553H44.2803L77.0345 84.7896L109.049 0.035553H152.721Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 138 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M91.9007 109.216H45.6376L38.6056 130.497H0.484863L48.0433 0.035553H89.8652L137.239 130.497H98.9327L91.9007 109.216ZM82.8332 81.4586L68.7692 39.2667L54.8903 81.4586H82.8332Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 122 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M77.2269 130.497L36.3303 73.3163V130.497H0.0600586V0.035553H36.3303V56.2915L76.8568 0.035553H118.679L70.7501 63.3235L121.084 130.497H77.2269Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 84 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.6018 29.0888V50.3698H78.2386V77.9426H36.6018V101.444H83.7902V130.497H0.331543V0.035553H83.7902V29.0888H36.6018Z" fill="black"/>
                                </svg>
                            </Stack>
                        </Box>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                mb: 1,
                                height: {
                                    xs: '70px',
                                    md: '81px'
                                },     
                            }}>
                                <Box width='100%' alignContent={'center'} justifyContent={'center'} sx={{
                                    display: 'flex'
                        }}>
                            <Stack direction={'row'} m='auto' gap={.5} sx={{objectFit:'contain'}}>

                                <svg viewBox="0 0 85 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.8235 29.0888V50.3698H78.4603V77.9426H36.8235V101.444H84.0118V130.497H0.553223V0.035553H84.0118V29.0888H36.8235Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 137 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M91.4676 109.216H45.2045L38.1726 130.497H0.0517578L47.6102 0.035553H89.4321L136.806 130.497H98.4996L91.4676 109.216ZM82.4001 81.4586L68.3361 39.2667L54.4572 81.4586H82.4001Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 103 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.8513 133.793C38.677 133.793 26.2168 130.215 16.4707 123.06C6.72458 115.781 1.48142 105.418 0.741211 91.971H39.4172C39.7873 96.5357 41.1443 99.8666 43.4883 101.964C45.8323 104.061 48.8549 105.11 52.5559 105.11C55.8869 105.11 58.601 104.308 60.6982 102.704C62.9189 100.977 64.0291 98.6329 64.0291 95.6721C64.0291 91.8477 62.2403 88.8868 58.6626 86.7896C55.085 84.6923 49.2867 82.3483 41.2677 79.7576C32.7553 76.9201 25.8467 74.206 20.5419 71.6153C15.3604 68.9012 10.7957 65.0151 6.84794 59.957C3.02352 54.7755 1.11138 48.0519 1.11138 39.7863C1.11138 31.3972 3.20862 24.2419 7.40314 18.3202C11.5977 12.2751 17.3959 7.71052 24.798 4.6263C32.2001 1.5421 40.5892 0 49.9652 0C65.1395 0 77.2296 3.57768 86.2355 10.733C95.3647 17.765 100.238 27.6962 100.855 40.5265H61.4384C61.315 36.5787 60.0814 33.6178 57.7374 31.644C55.5167 29.6701 52.6176 28.6831 49.0399 28.6831C46.3258 28.6831 44.1052 29.485 42.3781 31.0888C40.6509 32.6926 39.7873 34.9749 39.7873 37.9357C39.7873 40.4031 40.7126 42.562 42.5631 44.4126C44.537 46.1397 46.9427 47.6818 49.7802 49.0389C52.6176 50.2726 56.8121 51.8763 62.3637 53.8502C70.6294 56.6877 77.4146 59.5252 82.7195 62.3627C88.1477 65.0768 92.7739 68.9629 96.5984 74.021C100.546 78.9557 102.52 85.2475 102.52 92.8963C102.52 100.668 100.546 107.639 96.5984 113.807C92.7739 119.976 87.1607 124.849 79.7586 128.426C72.4799 132.004 63.8441 133.793 53.8513 133.793Z" fill="black"/>
                                </svg>

                                <svg viewBox="0 0 129 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M129 0.035553L83.107 89.0458V130.497H46.6517V89.0458L0.758789 0.035553H42.2105L65.157 50.3698L88.1034 0.035553H129Z" fill="black"/>
                                </svg>

                            </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                        
                        
                        <Typography 
                            variant="body2" 
                            sx={{
                                width: '80%',
                                font: 'Inter',
                                fontSize: 'calc(.5vw + 9px)',
                                fontWeight: '600',
                                lineHeight: '19px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color:'#363636',
                                mt: '10px',
                                mx: 'auto'
                            }}>

                            We help to build and operate web3 projects for enterprises
                        </Typography>
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: 3.5
                            }}>
                                <CustomButton onClick={() => {window.open('https://docsend.com/view/xxxxcsr6c42yxscp')}}>
                                    Download portfolio
                                </CustomButton>
                            </Box>
                    </Stack>
                </Container>
            </Box>

        </Fragment>
    )
}