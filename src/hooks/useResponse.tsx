import { Breakpoint, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const showMediaUp = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(point));
}

export const shownMediaDown = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(point));
}

export const showMediaOnly = (point: Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.only(point));
}