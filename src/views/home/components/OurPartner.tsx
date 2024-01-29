import { Box, Container, Typography, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";




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
    setIsOnMobile(window.innerWidth < 600)
}, [window.innerWidth])

    return (
        <Container sx={{
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            mb: '20px',
            justifyContent:'center',
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    width: '60%',
                    fontSize: `calc(${2}vw + 28px)`,
                    fontWeight: 700,
                    mb:2,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    },
                    mx: 'auto'
                }}>
                        <span>Our </span>
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
                                    key={index}
                                    style={{
                                        minWidth: '150px',
                                        maxWidth: '190px',
                                        minHeight: '50px',
                                        maxHeight: '80px',
                                        objectFit:'contain', 
                                        borderRadius: '10px',
                                        padding: '5px',
                                        margin: 'auto'
                                    }}/>                        
                            ))}
                        </Stack>
                    
            </ScrollAnimation>
        </Container>
    )
}