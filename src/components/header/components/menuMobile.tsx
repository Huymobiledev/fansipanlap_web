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
            <Stack spacing={2} pt={4}
                sx={{
                    position: 'absolute',
                    zIndex: 1000,
                    right: 0,
                    bottom: 0,
                    '.item': {
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                    }
                }}
            >
                {dataMenu.map((item, index) => (
                    <Link href={item?.link} key={index} onClick={onClose}>
                        <Stack direction={'row'} alignItems={'center'} spacing={3}
                            sx={{
                                'svg': {
                                    width: 8,
                                    height: 8,
                                    objectFit: 'contain'
                                },
                                color: router.pathname === (item.link)? '#22AD01': '#071F06'
                            }}
                        >
                            <BulletIcon/>
                            <div className="item">{t(item?.lable)}</div>
                        </Stack>
                    </Link>
                ))}
            </Stack>
        </Fragment>
    )
}