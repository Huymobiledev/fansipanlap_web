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
        title: 'Creative',
        description: 'CCTPA is always looking for new ways to solve complex problems related to climate change and developing cutting edge solutions.',
        icon: "/assets/images/about-core-1.png"
    },
    {
        title: 'Responsibility',
        description: 'CCTPA is committed to ensuring social and environmental responsibility in all our activities',
        icon: "/assets/images/about-core-2.png"

    },
    {
        title: 'Integrated',
        description: 'CCPTA believes that cooperation and integration between parties is the key to success in combating climate change.',
        icon: "/assets/images/about-core-3.png"

    },
];


export default function CoreValues(props: any) {
    const {data} = props

    const finalData = [
        {
            title: data[4]?.title || initData[0].title,
            description: data[4]?.intro || initData[0].description,
            icon: initData[0].icon
        },
        {
            title: data[5]?.title || initData[1].title,
            description: data[5]?.intro || initData[1].description,
            icon: initData[1].icon
        },
        {
            title: data[5]?.title || initData[2].title,
            description: data[5]?.intro || initData[2].description,
            icon: initData[2].icon
        },
        
    ]
    return (
        <Container maxWidth='xl' 
            sx={{
                }}
                >
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h2" sx={{
                            fontSize: '48px',
                            fontWeight: 600,
                            pb: 3,
                        }}>
                            Core <span style={{ color: '#22AD01' }}>Values</span>
                        </Typography>
                    </Grid>
                    {finalData.map((item, index) => (
                        <Grid item lg={4} xs={12} key={index}
                            sx={{
                                height: '100%',
                                
                            }}
                        >
                                <Stack direction={'column'} spacing={2}
                                    sx={{
                                        alignItems: 'center',
                                        border: '1px solid #CECECE',
                                        borderRadius: '20px',
                                        padding: '50px',
                                        height: '100%',
                                        minHeight: 420
                                    }}>
                                    <img src={item.icon} alt="" style={{ height: '110px', }} />
                                    <Typography variant="h6"
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            height: '58px',
                                            verticalAlign: 'top',
                                            textTransform: 'uppercase'
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
                                </Stack>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Container>

    );
}