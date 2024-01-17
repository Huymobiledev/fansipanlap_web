import { ButtonBase, styled } from "@mui/material";

export const ButtonImport = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 40,
        background: '#273B60',
        borderRadius: '8px',
        border: '1px solid #5371D7',
        color: '#A1B6FF',
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: '#1F2C44',
    }
});


export const ButtonGradient = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        margin: '8px',
        height: 48,
        background: 'linear-gradient(96.84deg, #BF26E5 4.07%, #3C14DA 94.64%)',
        borderRadius: '80px',
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
        display: 'inline',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase',
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: '#1F2C44',
    },
    '&:disabled': {
        background: 'linear-gradient(257.24deg, #999 -69.37%, #888 91.84%)',
    }
});

export const ButtonStartGradient = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 50,
        background: 'linear-gradient(257.24deg, #C5FF4A -39.37%, #21F2FF 121.84%)',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '13px',
        color: '#000',
        fontSize: 20,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase'
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: 'linear-gradient(257.24deg, #C5FF4A -69.37%, #21F2FF 91.84%)',
    },
    '&:disabled': {
        background: 'linear-gradient(257.24deg, #999 -69.37%, #888 91.84%)',
    }
});

export const ButtonRed = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        background: '#C70000',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '13px',
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase'
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: '#ea584b',
    },
    '&:disabled': {
        background: 'linear-gradient(257.24deg, #999 -69.37%, #888 91.84%)',
    }
});

export const ButtonBlack = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        background: '#000',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '13px',
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'captalize'
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: '#ea584b',
    },
    '&:disabled': {
        background: 'linear-gradient(257.24deg, #999 -69.37%, #888 91.84%)',
    }
});

export const ButtonGreen = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 50,
        padding: '0px 50px',
        background: '#22AD01',
        //boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '50px',
        color: '#fff',
        fontSize: '16px !important',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: '#22AD01',
    },
    '&:disabled': {
        background: '#898989',
        opacity: 0.5
    }
});

export const ButtonOutline = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: 'fit-content',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        background: 'inherit',
        border: '1px solid #CECECE',
        //boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '59px',
        color: '#333333',
        fontSize: '16px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase'
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        border: '1px solid #555555',
    }
});


export const ButtonColor = styled(ButtonBase)({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.21)',
        borderRadius: '13px',
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textTransform: 'capitalize',
    },
    '& img': {
        width: 17,
        height: 17,
        objectFit: 'cover',
        marginRight: '7px',
    },
    '&:hover': {
        background: 'inherit',
    },
    '&:disabled': {
        background: 'linear-gradient(257.24deg, #999 -69.37%, #888 91.84%)',
    }
});

