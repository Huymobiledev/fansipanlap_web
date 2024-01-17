import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function Experts(props: any) {
    const { data }: { data: any[] } = props
    
    const heading = data[8]?.title || 'Experts and Contributions'
    const intro = data[8]?.intro || 'Our commitment is to provide expert assistance within the cultural context of project owners/developers, companies, institutional partners, and buyers/sellers. We ensure that customers receive regular updates and forecasts related to project status, industry supply chains, market trends, and platform improvements. Additionally, we employ pre-emptive feedback mechanisms and swift response processes to drive continuous improvement, promote knowledge co-creation, and create positive impacts. This is facilitated through our internal CRM system.'
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
                    pb: 3,
                }}>
                    Experts and Contributions
                </Typography>
                <Typography sx={{
                    color: '#071F06',
                    fontSize: '16px',
                    maxWidth: '900px',
                    lineHeight: '27px',
                }} >
                    Our commitment is to provide expert assistance within the cultural context of project owners/developers, companies, institutional partners, and buyers/sellers. We ensure that customers receive regular updates and forecasts related to project status, industry supply chains, market trends, and platform improvements. Additionally, we employ pre-emptive feedback mechanisms and swift response processes to drive continuous improvement, promote knowledge co-creation, and create positive impacts. This is facilitated through our internal CRM system.
                    
                </Typography>
            </ScrollAnimation>
        </Container>
    )
}