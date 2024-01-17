import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function OurStory(props: any) {
    const { data }: { data: any[] } = props
    
    const heading = data[1]?.title || 'Our Story'
    const headingArr = String(heading).split(' ')
    const intro = data[1]?.intro || 'CT Group thirty thirty-year plan to become a net zero conglomerate across its  60+ companies and their international supply chains. required a carbon credit trading platform that understands the needs of ASEAN. From this the first carbon credit trading platform in ASEAN “ Carbon Credit Trading Platform ASEAN (CCTPA)” was born and grown through our team of high-capability professionals on both the Board of Directors and company operations,  as well as across our international partners.\nWith the CCTPA,   ASEAN Carbon offset Project Owners and developers can register and earn carbon credits. At the same time, companies, organizations, and individuals, including multinational corporations, SMEs, and environmentally conscious individuals, use CCTPA to offset their carbon emissions. Additionally, ESG professionals and companies rely on CCPTA to provide advice to ASEAN businesses and clients on sustainability and carbon removal practices across their supply chains. '

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
                    'span:last-child':{
                        color: '#22AD01'
                    }
                }}>
                    {headingArr.map((item, index) => (
                        <span key={index}>{item} </span>
                    ))}
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