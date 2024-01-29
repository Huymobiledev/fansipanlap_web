import { IconButton, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { dataMenu } from "./nav";
import Link from "next/link";
import { BulletIcon, CloseIcon } from "@/components/icons/icons";
import router from 'next/router';
import { useTranslation } from "react-i18next";


export default function MenuMobile(props: any) {
    const { onClose } = props
    const {t} = useTranslation()

    return (
        <Fragment>
            <Stack spacing={0} pt={4}
                sx={{
                    position: 'absolute',
                    zIndex: 1000,
                    right: 0,
                    p: 2,
                    background: '#FB471E',
                    top: 40,
                    width: 250,
                    bottom: 0,
                    '.item': {
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: '12px',
                        textTransform: 'uppercase',
                        color: '#fff',
                        textAlign: 'right'
                    }
                }}
            >
                {dataMenu.map((item, index) => (
                    <Link href={item?.link} key={index} onClick={onClose}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={2}
                            sx={{
                                borderBottom: '1px solid #E5E5E5',
                                color: router.pathname === (item.link)? '#fff': '#071F06',
                                py: 3,
                            }}
                        >
                            <div className="item">{t(item?.lable)}</div>
                        </Stack>
                    </Link>
                ))}
            </Stack>
        </Fragment>
    )
}