import { IconButton, Stack, Typography, Box, Button } from "@mui/material";
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
                    <Box key={index} width='100%'>
                        <Button
                            id={`${index}`}
                            onClick={(event) => {
                                item.link(event)
                                onClose()
                            }}
                            sx={{ml: 'auto', display: 'flex', width: '100%'}}
                        >
                            <Typography noWrap
                            variant="button"
                            id={`${index}`}
                            sx={{
                                fontSize: '14px',
                                color: '#ffffff',
                                textTransform: 'none',
                                marginLeft: 'auto'
                            }}
                        >
                            {t(item.lable)}
                        </Typography>
                        </Button>
                        <hr style={{color: 'white', borderWidth: '0.1px', width: '100%', borderStyle: 'solid', opacity: '.3'}}></hr>
                    </Box>
                ))}
            </Stack>
        </Fragment>
    )
}