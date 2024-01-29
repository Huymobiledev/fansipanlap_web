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
        <Box sx={{
            textAlign: 'center',
            alignItems: 'center',
            width: '60%',
            justifyContent:'center'
        }}>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' animateOnce={true}>
                    <Typography variant="h2" sx={{
                        width: '50vw',
                        fontSize: `calc(${2}vw + 28px)`,
                        mx: 'auto',
                        mb: 5,
                        fontWeight: 700,
                            whiteSpace: 'pre-line',
                        wordWrap: 'break-word',
                        'span:first-child':{
                            color: '#363636'
                        },
                        'span:last-child':{
                            color: '#FB471E'
                        }
                        
                    }}>
                            <span>Our </span>
                            <span>Team</span>

                    </Typography>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' delay={200} animateOnce={true}>
                    <Grid container sx={{alignItems: 'center', justifyContent: 'space-between', m: 'auto'}} maxWidth={'900px'}>
                        {team.map((item, index) => (
                            <Grid key={index} item xs={12} md={5.9} sx={{
                                alignItems: 'center',
                                width: '90vw',
                                display: 'flex',
                                mb: 1,
                                justifyContent: 'space-evenly',
                                m: 'auto'
                            }}>
                                <Box key={index} sx={{
                                    objectFit: 'cover',
                                }}>
                                    <img src={item} style={{width: '100%', maxWidth: '450px' ,borderRadius: '15px', right: 0}}/>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </ScrollAnimation>            
        </Box>
    )
}