import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function Intro(props: any) {
    const {data} = props

    const heading = data?.billions_to_trillions?.name
        || 'Billions to Trillions'
    const headingArr = String(heading).split(' ')

    const intro = data?.billions_to_trillions?.intro || 'Now valued at an estimated $2 billion, the voluntary carbon market must scale to limit the negative impacts of climate change. CCTPA is leading the charge to finance carbon projects designed for impact and growth.\nWe are defined by our full-scope approach, cutting-edge products and a global team with world-class expertise spanning project development, project finance and carbon credit sales.'

    return (
        <Container sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px'
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    fontSize: '48px',
                    fontWeight: 600,
                    'span:last-child':{
                        color: '#22AD01'
                    }
                }}>
                    {headingArr.map((item, index) => (
                        <span key={index}>{item} </span>
                    ))}
                </Typography>
                <Typography sx={{
                    pt: 2,
                    color: '#071F06',
                    fontSize: '16px',
                    maxWidth: '900px',
                    whiteSpace: 'pre-line'
                }} >
                    {intro}
                </Typography>
            </ScrollAnimation>
        </Container>
    )
}