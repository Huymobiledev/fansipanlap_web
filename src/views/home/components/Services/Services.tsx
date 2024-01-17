import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const CustomButton = styled(Button)({
    color: '#071F06',
    border: '1px solid #CECECE',
    borderRadius: '59px',
    padding: '0px 30px',
    textTransform: 'uppercase',
    height: '50px',
    fontSize: '12px',
    fontWeight: 600,
    gap: '10px',
    whiteSpace: 'nowrap',
    display: 'flex',
    '&:hover': {
        backgroundColor: '#071F06',
        color: '#FFFFFF',
        borderColor: '#071F06'
    }
});

const initData = [
    {
        title: 'Project Advisory and Consultation',
        description: 'Our approach also includes the implementation of tools and frameworks for effective customer touchpoints and service delivery. Furthermore, our service delivery extends...',
        icon: "tree1.png"
    },
    {
        title: 'Supply Chain CO2 Reduction Solutions',
        description: 'Robust carbon reporting and measurement capabilities with circular economic solutions for all major supply chain emissions reduction scope 1-2-3 needs.',
        icon: "tree2.png"
    },
    {
        title: 'Spot Exchange',
        description: 'We offer leading blockchain carbon credit exchange and trading services. Our expertise extends across the value chain to advising on Verra and Gold Standard project registry onboarding.',
        icon: "tree3.png"
    },
];


export default function Services(props: any) {
    const {data} = props

    const finalData = [
        {
            title: data?.billions_to_trillions?.articles[0]?.title || initData[0].title,
            description: data?.billions_to_trillions?.articles[0]?.intro || initData[0].description,
            icon: initData[0].icon,
            link: data?.billions_to_trillions?.articles[0]?.slug || '#',
        },
        {
            title: data?.billions_to_trillions?.articles[1]?.title || initData[1].title,
            description: data?.billions_to_trillions?.articles[1]?.intro || initData[1].description,
            icon: initData[1].icon,
            link: data?.billions_to_trillions?.articles[1]?.slug || '#',
        },
        {
            title: data?.billions_to_trillions?.articles[2]?.title || initData[2].title,
            description: data?.billions_to_trillions?.articles[2]?.intro || initData[2].description,
            icon: initData[2].icon,
            link: data?.billions_to_trillions?.articles[2]?.slug || '#',
        },
    ]

    return (
        <Container maxWidth='xl'>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Grid container spacing={3}>
                    {finalData.map((item, index) => (
                        <Grid item lg={4} key={index}
                            sx={{

                            }}
                        >
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={index * 300} animateOnce={true}>
                                <Stack direction={'column'} spacing={2}
                                    sx={{
                                        alignItems: 'center',
                                        border: '1px solid #CECECE',
                                        borderRadius: '20px',
                                        padding: '50px'
                                    }}>
                                    <img src={"/assets/images/" + item.icon} alt="" style={{ height: '110px', }} />
                                    <Typography variant="h3"
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            height: '58px',
                                            verticalAlign: 'top',

                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '100%',
                                            color: '#343434',
                                            fontSize: '16px',
                                            textAlign: 'center',
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 4,
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Link href={`/news/${item?.link}`}>
                                        <CustomButton>Learn more</CustomButton>
                                    </Link>
                                </Stack>
                            </ScrollAnimation>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Container>

    );
}