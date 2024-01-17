import { Dialog, Box, Typography, Stack } from "@mui/material";
import { Fragment } from "react";
import { ButtonOutline } from "../button";

export function ErrorDialog({ open, info, onClose }: { open: boolean, info: string, onClose: () => void }) {
    return (
        <Fragment>
            <Dialog open={open}
                sx={{
                    '.MuiPaper-root': {
                        backgroundColor: 'inherit',
                        borderRadius: '20px',
                    },
                    '.MuiBackdrop-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.35)'
                    }
                }}
            >
                <Box
                    sx={{
                        background: '#fff',
                        backdropFilter: 'blur(25px)',
                        borderRadius: '20px',
                        maxWidth: 'md',
                        minHeight: 150,
                    }}
                >
                    <Box
                        sx={{
                            padding: 2,
                            pt: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                pt: 1,
                                pb: 1,
                                px: 2,
                                fontSize: 16,
                                fontWeight: 500,
                                textAlign: 'center',
                                wordBreak: 'break-word',
                                whiteSpace: 'pre-wrap'
                            }}
                        >
                            {info || ''}
                        </Typography>
                        <Stack direction="row" justifyContent='center' spacing={2}
                            sx={{
                                pt: 2,
                                width: '100%',
                            }}
                        >
                            <ButtonOutline onClick={onClose}
                                sx={{
                                    minWidth: 200
                                }}
                            >
                                OK
                            </ButtonOutline>
                        </Stack>
                    </Box>

                </Box>
            </Dialog>
        </Fragment>
    );
}