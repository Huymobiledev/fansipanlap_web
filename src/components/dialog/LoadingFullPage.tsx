import { Box, CircularProgress, Container, LinearProgress } from "@mui/material";
import { RealcoinGreenIcon } from "../icons/logo";

export default function LoadingFullPage() {
    return (
        <Box
            sx={{
                pt: '35vh',
                pb: 8,
                px: 5.7,
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'url(/assets/background/circle-2.svg) no-repeat',
                backgroundSize: 'cover',
                color: '#22AD01',
                gap: 2,
            }}
        >
            <Box
                sx={{
                    width: 200,
                    'svg': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }
                }}
            >
                <img src='/assets/icon/logo-xxl.png' alt='logo'/>
            </Box>
            <Box sx={{ width: '100%' , maxWidth: 200}}>
                <LinearProgress color="inherit"/>
            </Box>
        </Box>
    );
}