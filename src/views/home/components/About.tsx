import { Box, Container, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function About(props: any) {
    const { data } = props

    const heading = data?.about_us?.title
        || 'About CCPTA'
    const headingArr = String(heading).split(' ')

    const intro = data?.about_us?.intro || 'We pioneer carbon reduction in ASEAN with our internationally accredited Web 3.0 carbon trading platform while offering comprehensive technology and equipment solutions to help businesses and their supply chains reduce carbon emissions and trade in the international carbon credit markets.\nOur streamlined platform simplifies project registration and carbon credit issuance, combined with expert consultation to maximize carbon credit potential and ensure transparent tracking of the buy/sell process, contributing to verifiable sustainability projects and supply chains.'

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
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' delay={500} animateOnce={true}>
                <Typography sx={{
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