import { Box, Container, Hidden, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { useTranslation } from 'react-i18next';
import { HomeIcon, MarketplaceIcon, MyNftIcon } from "../icons/icons";
import { useShowMediaDown } from "@/hooks/useResponse";

const menu = [
    {
        icon: MarketplaceIcon,
        text: 'Marketplace',
        link: '/marketplace'
    },
    {
        icon: HomeIcon,
        text: 'Home',
        link: '/'
    },
    {
        icon: MyNftIcon,
        text: 'My NFT',
        link: '/wallet'
    }
]

export default function FloatingBarMobile() {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <Fragment>
            {useShowMediaDown('md') &&
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: '-1px',
                        left: 0,
                        right: 0,
                        width: '100%',
                        zIndex: 1000,
                    }}
                >
                    <Container maxWidth='md'
                        sx={{
                            padding: '0 !important',
                        }}
                    >
                        <Stack direction="row" spacing={0} alignItems="flex-start" justifyContent="space-between"
                            sx={{
                                background: '#fff',
                                boxShadow: '0px -3px 6px 0px rgba(0, 0, 0, 0.06)',
                                borderRadius: '21px 21px 0px 0px',
                                width: '100%',
                                height: 100,
                                px: 3,
                                pb: 2,
                                pt: 1,
                                overflow: 'hidden',
                            }}
                        >
                            {menu.map((item, index) => {
                                const color = router.pathname.startsWith(item.link) ? '#333333' : '#898989'
                                return (

                                    <Stack direction='column' alignItems='center' key={index}
                                        sx={{
                                            color: color,
                                            position: 'relative',
                                            minWidth: `${100 / menu.length}%`,
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => router.push(item?.link)}

                                    >
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                color: 'inherit',
                                                'svg': {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                }
                                            }}
                                        >
                                            <item.icon />
                                        </Box>
                                        <Typography
                                            sx={{
                                                whiteSpace: 'pre-wrap',
                                                fontSize: 14,
                                                fontWeight: router.pathname.startsWith(item.link) ? 600 : 500,
                                                color: 'inherit',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {t(item.text)}
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: '50%',
                                                background: router.pathname === (item.link) ? '#22AD01' : 'none'
                                            }}
                                        >

                                        </Box>
                                    </Stack>
                                )
                            })}

                        </Stack>
                    </Container>
                </Box>
            }
        </Fragment>
    );
}