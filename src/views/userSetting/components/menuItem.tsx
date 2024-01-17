import { Box, Stack, Typography, Avatar } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import router from 'next/router';

export default function MenuItem(props: any) {
    const { item, noArrow, selected, onClick } = props;
    const { t } = useTranslation()

    const handleClick = () => {
        if (item?.link) {
            router.push(item?.link)
        } else if (!!onClick) {
            onClick(item?.value)
        }
    }

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center'
            sx={{
                width: '100%',
                pt: .5,
                pb: .5,
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 16,
                    fontWeight: selected ? 600 : 500,
                    'svg': {
                        width: 24,
                        height: 24,
                        maxHeight: 24,
                        objectFit: 'contain',
                        mr: 1,
                    }
                }}
            >
                {item?.avatar}
                {t(item?.label)}
            </Box>
            {noArrow !== true &&
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                    {selected ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17L15 12L10 7" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17L15 12L10 7" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    }
                </Stack>
            }
        </Stack >

    );
}