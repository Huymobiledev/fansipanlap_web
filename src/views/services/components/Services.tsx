import { Container, Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import HtmlParser from "react-html-parser";
import Image from "next/image";

const initData = [
    {
        image: '/assets/images/service1.jpg',
        title: 'Project Advisory and Consultation',
        text: 'Customer Journey<br/>1. Initial client engagement and preparation for best-fit international auditors and carbon registries.<br/>2.Localized coordination between clients and either our auditors or a registry deployed international auditor. <br/><br/>Our approach also includes the implementation of tools and frameworks for effective customer touchpoints and service delivery. Furthermore, our service delivery extends to international markets and is supported by 24/7 localized customer care. <br/>Project Development',
    },
    {
        image: '/assets/images/service2.jpg',
        title: 'Trading Exchange',
        text: 'We offer leading blockchain carbon credit exchange and trading services. Our expertise extends across the value chain to advising on Verra and Gold Standard project registry onboarding and coordinating with verified registry auditors. We have established a multinational, regulated IT infrastructure system that includes global service monitoring, forecasting, and AI-driven optimization.',
    },
    {
        image: '/assets/images/service3.jpg',
        title: 'Project Advisory and Consultation',
        text: 'Robust carbon reporting and measurement capabilities with circular economic solutions for all major supply chains emission reduction scope 1-2-3 needs.',
    },
]


function Item(props: any){
    const {index, item} = props
    const text = <Stack direction={'column'} spacing={2}>
            <Typography
                    sx={{
                        fontSize: 24,
                        fontWeight: 500,
                        color: '#000',
                        textAlign: 'left',
                        textTransform: 'uppercase'
                    }}
                >
                    {item.title}
            </Typography>
            <Typography
                    sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#343434',
                        textAlign: 'left'
                    }}
                >
                    {HtmlParser(item.text)}
            </Typography>
        </Stack>
    const image = <Image
        src={item.image}
        alt='thumb'
        width={745}
        height={450}
        style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
        }}
    />   

    return <Grid container >
        <Grid item lg={6} px={{xs:0, lg:1.5}}>
            {index % 2 == 0 ? text : image}
        </Grid>
        <Grid item lg={6} pt={{
            xs: 3,
            sm: 3,
            md: 3,
            lg: 0,
            xl: 0,
        }} px={{xs:0, lg:1.5}}>
            {index % 2 == 0 ? image : text}
        </Grid>
    </Grid>
}
export default function Services(props: any) {
    const {data} = props
    const finalData = [
        {
            image: data[0]?.thumb || initData[0].image,
            title: data[0]?.title || initData[0]?.title,
            text: data[0]?.content || initData[0]?.text,
        },
        {
            image: data[1]?.thumb || initData[1].image,
            title: data[1]?.title || initData[1]?.title,
            text: data[1]?.content || initData[1]?.text,
        },
    ]
    return (
        <Container maxWidth='xl'>
            <Stack direction={'column'} width={'100%'} spacing={15}
            >
                {finalData.map((item, index) => (
                    <Item key={index} item={item} index={index} />
                ))}
            </Stack>
        </Container>
    )
}