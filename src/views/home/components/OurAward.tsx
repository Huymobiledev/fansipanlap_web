import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography } from "@mui/material";

export default function OurAward(props: any) {
    const { t } = useTranslation()
    const [tab, setTab] = useState(0)

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)
})

    return (
        <Fragment>
            <Container maxWidth='xl'
                sx={{
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                my: '50px'}}
            >
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <Stack direction={'column'} gap={isOnMobile ? 3 : 7}>
                        <Typography variant="h2" sx={{
                            fontSize: isOnMobile ? '36px' : '48px',
                            fontWeight: 600,
                            'span:first-child':{
                                color: '#363636'
                            },
                            'span:last-child':{
                                color: '#FB471E'
                            }
                        }}>
                            <span>Our </span>
                            {isOnMobile && <br/>}
                            <span>Awards</span>
                        </Typography>
                        <Typography sx={{
                            fontSize: '40px',

                        }}>
                            We've been building many products with <b>million-user</b> scales
                        </Typography>
                        <Stack direction={isOnMobile ? 'column-reverse' : 'row'} gap={isOnMobile ? 2 : 5}>
                            <Box sx={{width: isOnMobile ? '100%' : '50%'}}>
                                <Stack direction={'column'} gap={'5px'} >
                                    <Box 
                                        sx={{
                                            display: 'flex', 
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <img 
                                            src='/assets/images/pngegg 1.png' 
                                            style={{
                                                width: '25%', 
                                                display:'inline', 
                                                position:'relative'
                                            }}/>

                                        <Typography 
                                            sx={{
                                                fontSize: isOnMobile ? '14px' : '16px',
                                                display: 'inline', 
                                                position:'relative',
                                                flex: 1,
                                                textAlign: 'left',
                                                ml: '20px'
                                            }}>
                                            <b>SingSing</b> is the winner of <b>Community-2-Blockchanin Hackathon</b> Vietnam 2021
                                        </Typography>
                                    </Box>
                                    <Box 
                                        sx={{
                                            height: '2px', 
                                            width: '100%',
                                            background: 'linear-gradient(270deg, rgba(241, 96, 36, 0) -0.09%, #F16024 49.41%, rgba(241, 96, 36, 0) 99.91%)'
                                    
                                    }}></Box>
                                    <Box 
                                        sx={{
                                            display: 'flex', 
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <img 
                                            src='/assets/images/pngegg 1.png' 
                                            style={{
                                                width: '25%', 
                                                display:'inline', 
                                                position:'relative'
                                            }}/>

                                        <Typography 
                                            sx={{
                                                fontSize: isOnMobile ? '14px' : '16px',
                                                display: 'inline', 
                                                position:'relative',
                                                flex: 1,
                                                textAlign: 'left',
                                                ml: '20px'
                                            }}>
                                            <b>2 National Cups</b> for software development <b>ASIA-PACIFIC ICT champion cup (APICTA)</b>
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction={'row'} gap={isOnMobile ? 1 : 11} sx={{
                                    alignItems: 'center'
                                }}>
                                    <img style={{
                                        width: isOnMobile ? '176px' : '300px', 
                                        height: isOnMobile ? '168px' : '300px'}} 
                                        src='/assets/images/Picture9-very_compressed-scale-4_00x 1.png'/>
                                    <img style={{
                                        width: isOnMobile ? '39px' : '70px', 
                                        height: isOnMobile ? '132px' : '236px'}} 
                                        src='/assets/images/apicta_award_home-89x300 1.png'/>
                                    <img style={{
                                        width: isOnMobile ? '39px' : '70px', 
                                        height: isOnMobile ? '132px' : '236px'}} 
                                        src='/assets/images/apicta_award_home-89x300 1.png'/>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                    
                </ScrollAnimation>
            </Container>

        </Fragment>
    )
}