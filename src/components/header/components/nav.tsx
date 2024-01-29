import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export const dataMenu = [
    {
        lable: 'Product',
        link: '/'
    },
    {
        lable: 'Services',
        link: '/'
    },
    {
        lable: 'Team',
        link: '/'
    },
    {
        lable: 'Awards',
        link: '/'
    },
    {
        lable: 'Partners',
        link: '/'
    },
    {
        lable: 'Blogs & News',
        link: '/'
    }

]
export default function Nav(props: any) {
    const {isDark} = props
    const router = useRouter()
    const {t} = useTranslation()

    return (
        <Fragment>
            <Stack direction='row' alignItems='center' id='a'
                sx={{
                    gap: 3,
                    height: '100%',
                    overflow: 'hidden',
                    px: 5
                }}
            >
                {
                    dataMenu.map((item, index) => (
                        <div key={index}>
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    ':hover': {
                                                transform: 'scale(1.1)'
                                            },
                                }}
                            >
                                <Link href={item.link}>
                                    <Typography noWrap
                                        sx={{
                                            fontSize: '14px',
                                            color: '#ffffff',
                                            
                                            textAlign: 'right',
                                        }}
                                    >
                                        {t(item.lable)}
                                    </Typography>
                                </Link>
                            </Box>
                        </div>
                        
                        
                    ))
                }
            </Stack>
        </Fragment>
    )
}