import { Dialog, Box, Typography, Stack } from "@mui/material";
import { Fragment } from "react";
import { ButtonGreen, ButtonOutline } from "../button";
import { useTranslation } from "react-i18next";

export default function ConfirmDialog({ open, info, onClose, onConfirm }: { open: boolean, info: string, onClose: () => void, onConfirm: (arg: any) => void }) {
    const success = info?.toLowerCase().includes('success') ? true : false;
    const {t} = useTranslation()
    return (
        <Fragment>
            <Dialog open={open} onClose={onClose}
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
                        borderRadius: '20px',
                        maxWidth: 'md',
                        minWidth: 300,
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
                            justifyContent: 'space-between',
                        }}
                    >
                        {success && <img src='/assets/icons/sucess.svg' alt="" />}
                        <Typography
                            sx={{
                                pt: 1,
                                pb: 1,
                                fontSize: 16,
                                fontWeight: 500,
                                textAlign: 'center',
                                whiteSpace: 'pre-line',
                                lineHeight: 1.2,
                                color: '#000'
                            }}
                        >
                            {info || ''}
                        </Typography>
                        <Stack direction="row" justifyContent='center' spacing={2}
                            sx={{
                                pt: 2,
                                width: '100%',
                                'button': {
                                    width: '50% !important'
                                }
                            }}
                        >
                            <ButtonOutline onClick={onClose}>
                                {t('Cancel')}
                            </ButtonOutline>
                            <ButtonGreen onClick={onConfirm}>
                                {t('Yes')}
                            </ButtonGreen>
                        </Stack>
                    </Box>

                </Box>
            </Dialog>
        </Fragment>
    );
}