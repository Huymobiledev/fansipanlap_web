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
                    '.item': {
                        fontSize: 12,
                        fontWeight: 600,
                        width: '100%',
                        justifyContent:'right',
                    }
                }}
            >
                {dataMenu.map((item, index) => (
                    <Link href={item?.link} key={index} onClick={onClose}>
                        <Stack direction={'row'} spacing={3}
                            sx={{
                                color: 'white',
                                width: '100%',
                            }}
                        >
                            <div style={{marginLeft: 'auto'}}>{t(item?.lable)}</div>
                        </Stack>
                        <hr style={{color: 'white', borderWidth: '0.1px', width: '100%', borderStyle: 'solid', opacity: '.3'}}></hr>
                    </Link>
                ))}
            </Stack>
        </Fragment>
    )
}