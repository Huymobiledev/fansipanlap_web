import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";



export default function OurTeam(props: any) {
    const { data } = props

    const team = ['/assets/images/Picture7 2.png', '/assets/images/Picture7 1.png']

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)
    const [is4K, setIs4K] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600)
    setIs4K(window.innerWidth > 2560)
},[window.innerWidth])

    return (
        <Container sx={{
            textAlign: 'center',
            alignItems: 'center',
            width: isOnMobile ? '100vw' : '75vw',
            justifyContent:'center'
        }} id='team'>
            <Stack direction={'column'} gap={5}>
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
                            <span>Team</span>

                    </Typography>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' delay={200} animateOnce={true}>
                    <Grid container sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                        {team.map((item, index) => (
                            <Grid key={index} item xs={12} md={5.9} sx={{
                                alignItems: 'center',
                                width: isOnMobile ? '90vw' : 1,
                                display: 'flex',
                                mb: 1
                            }}>
                                <Box key={index} sx={{
                                    objectFit: 'contain',
                                }}>
                                    <img src={item} style={{width: '100%', borderRadius: isOnMobile ? '10px' : '20px'}}/>
                                </Box>
                            </Grid>
                            
                            
                        ))}
                    </Grid>
                </ScrollAnimation>
            </Stack>
            
        </Container>
    )
}