import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export default function NoData({ text }: { text?: string }) {
    return (
        <Fragment>
            <Stack direction="column" justifyContent='center' alignItems='center' width='100%' py={3}>
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        'img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        },
                        display: 'flex',
                        jutifyContents: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src="/assets/icons/nodata.png" alt="" />
                </Box>

                <Typography fontSize={16}
                    sx={{
                        color: '#999999'
                    }}
                >
                    {text || 'No data available'}
                </Typography>
            </Stack>
        </Fragment>
    );
}