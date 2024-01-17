import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function OurCommunity(props: any) {
    const { data }: { data: any[] } = props
    
    const heading = data[7]?.title || 'Our Community and Partnerships'
    const intro = data[7]?.intro || 'We also collaborate with international registries and buyer/seller exchanges. Our partnerships with National and Local Governments are vital for regulatory alignment and project approvals.\nWe engage with International Institutions for banking and finance support, universities for research and development, and environmental NGOs for community impact. We work closely with government agencies and partner with corporations and business chambers to promote sustainable business practices. Our extensive international agreements includes world-leading providers of circular economy expertise, technology, and equipment supply solutions for all size supply chains and Enterprises across the major sectors in ASEAN. These partnerships offer our clients a comprehensive approach to carbon credit transactions and sustainability.'
    return (
        <Container sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            borderBottom: '1px solid #cecece',
            pb: 10
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    fontSize: '48px',
                    fontWeight: 600,
                    pb: 3,
                }}>
                    {heading}
                </Typography>
                <Typography sx={{
                    color: '#071F06',
                    fontSize: '16px',
                    maxWidth: '900px',
                    lineHeight: '27px',
                    whiteSpace: 'pre-line'
                }} >
                    {intro}
                </Typography>
            </ScrollAnimation>
        </Container>
    )
}