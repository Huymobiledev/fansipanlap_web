import { Box, Container, Typography, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";



export default function OurTeam(props: any) {
    const { data } = props

    const team = ['/assets/images/Picture7 2.png', '/assets/images/Picture7 1.png']

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
                        <span>Team</span>

                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' delay={500} animateOnce={true}>
                <Stack direction={isOnMobile ? 'column' : 'row'} gap={'10px'} alignItems={'center'} sx={{
                    
                }}>
                    {team.map((item, index) => (
                        <Box key={index} sx={{
                            width: isOnMobile ? '300px' : '500px',
                            overflow: 'hidden'
                        }}>
                            <img src={item} style={{width: '100%', borderRadius: '10px'}}/>
                        </Box>
                        
                    ))}
                </Stack>
            </ScrollAnimation>
        </Container>
    )
}