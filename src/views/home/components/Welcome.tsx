import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import { useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import router from 'next/router';

const CustomButton = styled(Button)({
    color: 'white',
    border: '1px solid white',
    borderRadius: '59px',
    padding: '0px 30px',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(1px)',
    height: '50px',
    fontSize: '12px',
    fontWeight: 600,
    gap: '10px',
    whiteSpace: 'nowrap',
    display: 'flex',
    '&:hover': {
        backgroundColor: '#A7FAD2',
        color: '#071F06',
        borderColor: '#A7FAD2'
    },
    '& .MuiButton-endIcon': {
        margin: 0,
    },

});


export default function Welcome(props: any) {

    const [data, setData] = useState<any>(undefined)
    const {appConfig} = useAppSelector(appConfigSelector)

    useEffect(() => {
        if(appConfig && router.locale){
            setData(appConfig.home_contents[router.locale || ''])
        }
    }, [router.locale, appConfig])

    const heading = data?.top?.heading || 'Financing the Future of Carbon Solutions'
    const intro = data?.top?.intro || 'OFFERING PIONEERING PROJECT FINANCE AND TECHNOLOGY, PROJECT DEVELOPMENT AND CREDIT PORTFOLIO SERVICES'
    const btnLink = {
        carbon_credit: data?.top?.carbon_credit || '#',
        contact_advisory: data?.top?.contact_advisory || '#',
        register_tranding: data?.top?.register_tranding || '#'
    }

    return (
        <Fragment>
            <Box
                sx={{
                    width: '100%',
                    background: `url(/assets/background/bg.png) no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                <Container maxWidth='xxl' sx={{
                    color: 'white',
                    width: '100%',
                    minHeight: '100vh',
                    height: '100%',
                    display: 'flex',
                    alignItems: {
                        xs: 'center',
                        md: 'flex-end',
                    },
                    p: [0, 0, 10, 10, 10]
                }}
                >
                    <Stack spacing={2} sx={{
                        maxWidth: 768,
                        height: '100%',
                        pb: 5,
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        },
                        px: {
                            md: 0,
                            xs: 2,
                        }
                    }}>
                            <Typography variant="h1" sx={{
                                fontSize: [38, 38, 56, 56, 56],
                                fontWeight: [500, 500, 400, 400, 400]
                            }}>
                                {heading}
                            </Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 500 , textTransform: 'uppercase'}}>
                            {intro}
                        </Typography>
                        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                            <Grid container sx={{ paddingTop: 1 }}>
                                <Grid item xs={12} md={4}
                                    sx={{
                                        pl: {
                                            md: 0,
                                            xs: 1,
                                        },
                                        pr: 1,
                                        py: 1
                                    }}
                                >
                                    <CustomButton endIcon={<ArrowForwardIosIcon />} fullWidth
                                        onClick={() => router.push(btnLink.contact_advisory)}
                                    >Contact Advisory</CustomButton>
                                </Grid>
                                <Grid item xs={12} md={4} p={1}>
                                    <CustomButton endIcon={<ArrowForwardIosIcon />} fullWidth
                                        onClick={() => router.push(btnLink.carbon_credit)}
                                    >List Carbon Credit</CustomButton>
                                </Grid>
                                <Grid item xs={12} md={4} p={1}>
                                    <CustomButton endIcon={<ArrowForwardIosIcon />} fullWidth 
                                        onClick={() => router.push(btnLink.register_tranding)}
                                    >Register for Tranding</CustomButton>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Stack>
                </Container>
            </Box>

        </Fragment>
    )
}