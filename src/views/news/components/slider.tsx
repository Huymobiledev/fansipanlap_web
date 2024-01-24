import { Fragment, useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/styles/swiper.css';
import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import { ButtonOutline } from "@/components/button";
import Link from "next/link";
import router from 'next/router';
import moment from "moment";
import { useTranslation } from "react-i18next";
import { getHotNewsAPI } from "@/api/news";



export default function NewSlider(props: any) {
    const { t } = useTranslation()
    const numSlide = 1
    const dateFormat = 'DD MMM YYYY';

    const [data, setData] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const limit = 20

    const isDesktop = useMediaQuery('(min-width: 900px)')

    useEffect(() => {
        const fetchNews = async () => {
            if (loading) {
                return
            }
            try {
                setLoading(true);
                let filter: any = {
                    limit: limit
                }
                const result = await getHotNewsAPI(filter);
                if (result.success) {
                    setData(result.data);
                } else {
                    setError(result?.error?.message)
                }
            } catch (err: any) {
                setError(err?.message);
            } finally {
                setLoading(false);
            }
        }

        fetchNews()
    }, [router.locale]);

    if (!data || data.length === 0) {
        return <></>
    }

    return (
        <Fragment>
            <Box
                sx={{
                    width: '100%',
                    pt: [0, 0, 6, 6, 6]
                }}
            >
                <Swiper
                    slidesPerView={numSlide}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="mySwiper"
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={item.article_id}>
                            <Grid container
                                sx={{
                                    width: '100%',
                                    mb: 5,

                                }}
                            >
                                <Grid item lg={6}
                                    sx={{
                                        padding: {
                                            md: 2,
                                            xs: 0,
                                        },
                                    }}
                                >
                                    <Link href={router.pathname + '/' + item?.slug}>
                                        <Box
                                            sx={{
                                                width: 585,
                                                height: 300,
                                                aspectRatio: '16/9',
                                                'img': {
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                },
                                                pb: {
                                                    md: 0,
                                                    xs: 2,
                                                }
                                            }}
                                        >
                                            <Image
                                                src={item?.thumb || '/assets/images/new-thumb.png'}
                                                alt='thumb'
                                                width={isDesktop ? 600 : 300}
                                                height={isDesktop ? 400 : 200}
                                                quality={70}
                                                priority={index < 2 ? true : false}
                                            />
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid item lg={6}
                                    sx={{
                                        padding: {
                                            md: 2,
                                            xs: 0,
                                        },
                                        textAlign: 'left',
                                        'h3': {
                                            mt: 0,
                                            fontSize: [20, 20, 24, 24, 24],
                                            fontWeight: 700,
                                            textTransform: 'uppercase'
                                        },
                                        '.time': {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            color: '#CECECE',
                                        },
                                        'p': {
                                            fontSize: 16,
                                            fontWeight: 500,
                                        }
                                    }}
                                >
                                    <Link href={router.pathname + '/' + item?.slug}>
                                        <h3>{item?.title}</h3>
                                    </Link>
                                    <div className="time">
                                        {item ? moment(item?.created_at).format(dateFormat) : ''}
                                    </div>
                                    {/*  <p>
                                        {item?.intro}
                                    </p> */}
                                    {/* <Stack direction={'row'} justifyContent={'flex-end'} width={'100%'}>
                                        <Link href={router.pathname + '/' + item?.slug}>
                                            <ButtonOutline>
                                                {t('Learn more')}
                                            </ButtonOutline>
                                        </Link>
                                    </Stack> */}
                                </Grid>
                            </Grid>

                        </SwiperSlide>

                    ))}
                </Swiper>

            </Box>
        </Fragment>
    )
}