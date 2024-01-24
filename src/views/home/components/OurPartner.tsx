import { Box, Container, Typography, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SimpleBar from 'simplebar-react';




export default function OurPartner(props: any) {
    const { data } = props

    const partners = [
        '/assets/images/avax-full-avalanche-logo-01 1.png',
        '/assets/images/avax-full-avalanche-logo-01 1-1.png',
        '/assets/images/avax-full-avalanche-logo-01 1-2.png',
        '/assets/images/avax-full-avalanche-logo-01 1-3.png',
        '/assets/images/avax-full-avalanche-logo-01 1-4.png',
        '/assets/images/avax-full-avalanche-logo-01 1-5.png',
        '/assets/images/avax-full-avalanche-logo-01 1-6.png',
    ]

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)
})

    return (
        <Container sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            backgroundColor: '#fff',
            mb: '20px',
            
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
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
                        <span>Partners</span>

                </Typography>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'} sx={{
                            alignItems: 'left',   
                            overflowX: 'scroll',
                            backgroundColor: '#fff',
                            maxWidth: '100vw',
                            p: '10px',
                            'img' : {
                                boxShadow: '1px 1px 2px 0px rgba(0,0,0,.1)',
                            },
                            '&::-webkit-scrollbar': {
                                width: '0',  
                                },                
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'transparent',
                                },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: '#fff',
                                m:'10px'
                                
                            },
                        }}>
                            {partners.map((item, index) => (
                                <img src={item} 
                                    style={{
                                        width: isOnMobile ? '125px' : '190px', 
                                        height: isOnMobile ? '50px' : '80px', 
                                        objectFit:'contain', 
                                        borderRadius: '10px',
                                        padding: '5px'
                                    }}/>                        
                            ))}
                        </Stack>
                    
            </ScrollAnimation>
        </Container>
    )
}