import { Stack, Container, Box, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CloseIcon } from '../icons/icons';


export type Props = {
    title: string
    onBack: VoidFunction
    onClose: VoidFunction
}

export default function StackNavigationBar({ title, onBack , onClose}: Props) {

    return (

        <Box
            sx={{
                width: '100%',
                background: 'transparent',
                pt: 2,
            }}
        >
            <Stack direction="row"
                sx={{ width: '100%', position: 'relative', height: '32px' }}
                textAlign="center"
                alignItems="center"
                justifyContent="center"
            >
                <Stack sx={{ position: 'absolute', top: 0, bottom: 0, left: 0 }}
                    justifyContent="center"
                >
                    <Button onClick={() => { onBack() }}>
                        <ArrowBackIosIcon sx={{ color: '#333333' }} />
                    </Button>
                </Stack>
                <Typography sx={{
                    width: '100%',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                }}
                >
                    {title}
                </Typography>
                <Stack sx={{ position: 'absolute', top: 0, bottom: 0, right: 0 }}
                    justifyContent="center"
                >
                    <Button onClick={() => { onClose() }}>
                        <CloseIcon sx={{ color: '#333333' }} />
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )

}