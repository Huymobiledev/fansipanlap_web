import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import { ButtonBase, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import '@/styles/swiper.css';
import { useShowMediaUp } from "@/hooks/useResponse";

const data = [
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
    {
        image: '/assets/images/backer.png',
        title: '',
    },
]


export default function Backed(props: any) {
    const { t } = useTranslation()
    
    const numSlide = useShowMediaUp('md')? 5: 1

    return (
        <Fragment>
            <Container maxWidth='xl'>
                <Stack direction={'column'} width={'100%'} alignItems={'center'} py={6}
                    sx={{
                        textAlign: 'center'
                    }}
                >

                    <h1>{t('Backed by the World’s Leading Investors')}</h1>
                    <Box
                        sx={{
                            width: '100%',
                            pt: 6
                        }}
                    >
                        <Swiper
                            slidesPerView={numSlide}
                            navigation={true}
                            modules={[Pagination]}
                            loop={true}
                            className="mySwiper"
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                        <Image
                                            src={item.image}
                                            alt='thumb'
                                            width={260}
                                            height={70}
                                            style={{
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        />
                                </SwiperSlide>

                            ))}
                        </Swiper>

                    </Box>
                    </Stack>
            </Container>

        </Fragment>
    )
}