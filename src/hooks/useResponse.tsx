import { Breakpoint, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useShowMediaUp = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(point));
}

export const useShowMediaDown = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(point));
}

export const useShowMediaOnly = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.only(point));
}