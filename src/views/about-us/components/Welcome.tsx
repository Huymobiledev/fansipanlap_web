import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image";

export default function Welcome(props: any) {
    const { data }: { data: any[] } = props

    const intro = data[0]?.intro || 'We pioneer carbon reduction in ASEAN with our internationally accredited Web 3.0 carbon trading platform while offering comprehensive technology and equipment solutions to help businesses and their supply chains reduce carbon emissions and trade in the international carbon credit markets. Our streamlined platform simplifies project registration and carbon credit issuance, combined with expert consultation to maximize carbon credit potential and ensure transparent tracking of the buy/sell process, contributing to verifiable sustainability projects and supply chains.'

    return (
        <Box
            sx={{
                width: '100%',
                background: `url(/assets/background/about-bg-1.png) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <Container sx={{
                color: 'white',
                minHeight: '100vh',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}
            >
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <Box
                        sx={{
                            borderRadius: '50%',
                            border: '1px solid rgba(206, 206, 206, 0.08)',
                            p: 3.1
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '50%',
                                border: '1px solid rgba(206, 206, 206, 0.21)',
                                p: 2.2
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: '50%',
                                    border: '1px dashed rgba(206, 206, 206, 0.55)',
                                    p: 1.9
                                }}
                            >
                                <Stack spacing={2} alignItems={'center'}
                                    sx={{
                                        width: ['100vw', 600, 600, 600, 800],
                                        height: ['100vw', 600, 600, 600, 800],
                                        maxWidth: ['100vw', 600, 600, 600, 800],
                                        padding: [3, 3, 4, 4, 10],
                                        opacity: 1,
                                        borderRadius: '50%',
                                        background: 'rgba(0, 0, 0, 0.25)',
                                        backdropFilter: 'blur(2.5px)',
                                    }}>
                                    <Box
                                        sx={{
                                            width: '60%',
                                        }}
                                    >
                                        <Image
                                            src={'/assets/icons/logo-xxl.png'}
                                            alt="logo"
                                            width={400}
                                            height={400}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />

                                    </Box>

                                    <Typography variant="subtitle1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: {
                                                lg: '2.8px',
                                                md: '2.2px',
                                                xs: '1.2px',
                                            }
                                        }}
                                    >
                                        {intro}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </ScrollAnimation>

            </Container>
        </Box>
    )
}