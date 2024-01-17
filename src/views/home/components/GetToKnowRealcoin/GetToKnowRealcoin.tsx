import { Box, Container, Stack } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import { ButtonBase, Grid, Skeleton, Typography } from "@mui/material";
import router from 'next/router';
import Link from "next/link";
import { getLatestNews } from "@/api/news";

const data = [
    {
        image: '',
        title: 'NEW',
        text: 'CCPTA Selected by Gold Standard for Readiness Phase of Carbon Credit Tokenization',
        learnmore: '/learmore'
    },
    {
        image: '',
        title: 'NEW',
        text: 'CCPTA Selected by Gold Standard for Readiness Phase of Carbon Credit Tokenization',
        learnmore: '/learmore'
    },
    {
        image: '',
        title: 'NEW',
        text: 'CCPTA Selected by Gold Standard for Readiness Phase of Carbon Credit Tokenization',
        learnmore: '/learmore'
    },
]


export default function GetToKnowRealcoin(props: any) {
    const { t, i18n } = useTranslation()
    const [tab, setTab] = useState(0)
    const [data, setData] = useState<any[]>([])
    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        if (pending) {
            return
        }
        try {
            setPending(true);
            let filter: any = {
                limit: 3
            }

            const result = await getLatestNews(filter);
            if (result.success) {
                setData(result.data);
            } else {
                setError(result?.error?.message)
            }
        } catch (err: any) {
            setError(err?.message);
        } finally {
            setPending(false);
        }
    }


    useEffect(() => {
        getData()
    }, [i18n.language])

    if(!data || error){
        return<></>
    }

    return (
        <Fragment>
            <Container maxWidth='xl'>
                <Stack direction={'column'} width={'100%'} alignItems={'center'} py={6}
                    sx={{
                        textAlign: 'center'
                    }}
                >

                    <h1>{t('Get to know CCTPA')}</h1>
                    <Box
                        sx={{
                            width: '100%',
                            pt: 6
                        }}
                    >
                        <Grid container spacing={1} width={'100%'}>
                            {data.map((item, index) => (
                                <Grid item md={4} xs={12} key={index}
                                    sx={{
                                        width: '100%',
                                        mb: {
                                            xs: 5,
                                            md: 0,
                                        }
                                    }}
                                >
                                    <Link href={`/news/${item?.slug}`}>
                                        <Stack direction={'column'} spacing={2}>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    overflow: 'hidden',
                                                    padding: 3,
                                                    borderRadius: '20px',
                                                    background: `url(${item?.thumb}) no-repeat, #003C2C`,
                                                    backgroundSize: 'cover',
                                                    minHeight: 225,
                                                    aspectRatio: '16/9',
                                                    fontSize: 40,
                                                    fontWeight: 600,
                                                    display: 'fex',
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-start',
                                                    color: '#fff'
                                                }}
                                            >
                                                <Typography variant="h5"
                                                    sx={{
                                                        textAlign: 'center',
                                                        display: '-webkit-box',
                                                        overflow: 'hidden',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 4,
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    {/* {item?.title} */}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#343434',
                                                    textAlign: 'left',
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {item?.title}
                                            </Typography>
                                            <ButtonBase
                                                sx={{
                                                    width: 'fit-content',
                                                    fontWeight: 500,
                                                    fontSize: 12,
                                                    color: '#22AD01',
                                                    letterSpacing: '2.4px',
                                                    'svg': {
                                                        width: 24,
                                                        height: 24,
                                                        ml: 1,
                                                    },
                                                    textTransform: 'uppercase'
                                                }}
                                                onClick={() => router.push(`/news/${item?.slug}`)}
                                            >
                                                 { t("Learn more") }
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12.1204 8.8254C11.9407 8.61574 11.965 8.30009 12.1746 8.12038C12.3843 7.94067 12.6999 7.96495 12.8796 8.17461L15.8796 11.6746C16.0401 11.8619 16.0401 12.1382 15.8796 12.3254L12.8796 15.8254C12.6999 16.0351 12.3843 16.0593 12.1746 15.8796C11.965 15.6999 11.9407 15.3843 12.1204 15.1746L14.8415 12L12.1204 8.8254ZM8.12038 8.8254C7.94067 8.61574 7.96495 8.30009 8.17461 8.12038C8.38428 7.94067 8.69993 7.96495 8.87964 8.17461L11.8796 11.6746C12.0401 11.8619 12.0401 12.1382 11.8796 12.3254L8.87964 15.8254C8.69993 16.0351 8.38428 16.0593 8.17461 15.8796C7.96495 15.6999 7.94067 15.3843 8.12038 15.1746L10.8415 12L8.12038 8.8254Z" fill="#22AD01" />
                                                </svg>
                                            </ButtonBase>
                                        </Stack>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>

                    <Stack direction={'row'} justifyContent={'center'} pt={5}>
                        <ButtonGreen
                            sx={{
                                maxWidth: 300
                            }}
                            onClick={() => router.push('/news')}
                        >
                            { t("Read more") }
                        </ButtonGreen>
                    </Stack>
                </Stack>
            </Container>

        </Fragment>
    )
}

function NewSkeleton() {
    return (
        <Fragment>
            <Grid item lg={4}
                sx={{
                    mb: {
                        xs: 3,
                        md: 0,
                    }
                }}
            >
                <Stack direction={'column'} spacing={2}>
                    <Box
                        sx={{
                            padding: 3,
                            borderRadius: '20px',
                            background: `url(/assets/background/circle-5.svg) no-repeat, #003C2C`,
                            minHeight: 225,
                            fontSize: 40,
                            fontWeight: 600,
                            display: 'fex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff'
                        }}
                    >
                        <Skeleton variant='rectangular' height={'100%'} width={'100%'} />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: [16, 16, 24, 24, 24],
                            fontWeight: 600,
                            color: '#343434',
                            textAlign: 'left'
                        }}
                    >
                        <Skeleton height={'100%'} width={'100%'} />
                    </Typography>
                    <Skeleton height={'100%'} width={'40%'} />
                </Stack>
            </Grid>
        </Fragment>
    )
}