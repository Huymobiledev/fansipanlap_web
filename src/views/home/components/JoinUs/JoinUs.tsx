import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import { ButtonBase, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function JoinUs(props: any) {
    const { t } = useTranslation()
    return (
        <Fragment>
            <Container maxWidth='xxl'>
                <Box
                    sx={{
                        width: '100%',
                        background: `url(/assets/background/joinus.png) center center no-repeat,
                                    linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(4,17,29,0.6) 62%)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'color',
                        padding: '100px 50px',
                        minHeight: 227,
                        borderRadius: '10px',
                    }}
                >

                    <Stack direction={'column'} spacing={3}
                        sx={{
                            color: '#fff',
                            alignItems: {
                                xs: 'center',
                                md: 'flex-start'
                            }
                        }}
                    >
                        <Typography variant="h1" sx={{
                            fontSize: 48,
                            fontWeight: 500
                        }}>
                            Join Us!
                        </Typography>
                        <Typography variant="subtitle1" 
                        sx={{ 
                            fontSize: [16, 16, 24, 24, 24], 
                            fontWeight: 500,
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            }

                        }}>
                            We&apos;sre growing fast and are looking for more talent to add to our team
                        </Typography>

                        <ButtonBase
                            sx={{
                                borderRadius: '50px',
                                px: 5,
                                height: 50,
                                textTransform: 'uppercase',
                                color: '#343434',
                                background: '#fff',
                                letterSpacing: '1.6px',
                                fontWeight: 600,
                                fontSize: [14, 14, 16, 16, 16],
                                whiteSpace: 'nowrap'
                            }}
                        >
                            See open opportunities
                        </ButtonBase>
                    </Stack>
                </Box>
            </Container>
        </Fragment>
    )
}