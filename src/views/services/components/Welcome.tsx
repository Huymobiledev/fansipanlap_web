import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Welcome(props: any) {

    return (
        <Box
            sx={{
                width: '100%',
                background: `url(/assets/background/bg-services.jpg) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <Container  sx={{
                color: 'white',
                minHeight: '100vh',
                height: '100%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                p: [0, 0, 10, 10, 10]
            }}
            >
                <Stack spacing={2} sx={{
                    maxWidth: 800,
                    height: '100%',
                    padding: '85px',

                }}>
                        <Typography variant="h1" sx={{
                            fontSize: [38, 38, 64, 64, 64],
                            fontWeight: [500, 500, 500, 500, 500],
                            textTransform: 'uppercase'
                        }}>
                            Project Finance <br/> Services
                        </Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 600, paddingX: '50px' }}>
                        SUPPORTING ALL STAGES OF INVESTMENT ACROSS VETTED HIGH QUALITY CARBON PROJECTS AROUND THE GLOBE
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}