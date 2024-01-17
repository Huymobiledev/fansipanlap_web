import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export const dataMenu = [
    {
        lable: 'Home',
        link: '/'
    },
    {
        lable: 'About Us',
        link: '/about-us'
    },
    {
        lable: 'Services',
        link: '/services'
    },
    {
        lable: 'News',
        link: '/news'
    },

]
export default function Nav(props: any) {
    const {isDark} = props
    const router = useRouter()
    const {t} = useTranslation()

    return (
        <Fragment>
            <Stack direction='row' alignItems='center'
                sx={{
                    gap: [2, 2, 2, 5, 5],
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                {
                    dataMenu.map((item, index) => (
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Link href={item.link}>
                                <Typography noWrap
                                    sx={{
                                        fontSize: [12, 12, 14, 14, 14],
                                        fontWeight: 600,
                                        color: router.pathname === item.link ? '#0BD172' : isDark? '#000':'#fff',
                                        ':hover': {
                                            color: '#0BD172'
                                        },
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {t(item.lable)}
                                </Typography>
                            </Link>
                        </Box>
                    ))
                }
            </Stack>
        </Fragment>
    )
}