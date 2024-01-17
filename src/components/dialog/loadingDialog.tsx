import { Box, CircularProgress, Dialog, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function LoadingDialog({ open }: { open: boolean }) {
    return (
        <Fragment>
            <Dialog open={open}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: 'inherit',
                        backdropFilter: 'blur(6.5px)',
                        borderRadius: '20px',
                    }
                }}
            >
                <Box
                    sx={{
                        background: 'rgba(153, 153, 153, 0.21)',
                        borderRadius: '20px',
                        padding: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 150,
                        height: 150,
                    }}
                >
                    <CircularProgress size={30} />
                </Box>
            </Dialog>
        </Fragment>
    );
}



export function LoadingData({ size }: { size?: number }) {
    const sizes = size || 16;
    return (
        <Fragment>
            <Box
                sx={{
                    width: '100%',
                    height: '20vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CircularProgress size={sizes} />
            </Box>
        </Fragment>
    );
}