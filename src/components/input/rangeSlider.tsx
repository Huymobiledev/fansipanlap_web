import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { formatNumber } from '@/utils';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IProps {
    onChange: (arg: any) => void
    range: number[]
    currentRange: number[]
}

const FilterSlider = styled(Slider)({
    color: '#22AD01',
    height: 10,
    padding: 0,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 16,
        width: 16,
        backgroundColor: '#015642',
        //border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        backgroundColor: '#22AD01',
    },
});


function valuetext(value: number) {
    return `${value}°sqm`;
}


export default function RangeSlider(props: IProps) {
    const [value, setValue] = React.useState<number[]>([]);
    const { t } = useTranslation()
    const handleChange = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
        //setValue(newValue as number[]);
        props?.onChange(newValue as number[])
    };

    React.useEffect(() => {
        if(props.currentRange.length ===0){
            setValue(props.range)
        }
    },[props.currentRange])


    return (
        <Box sx={{ width: '100%' }}>
            <FilterSlider
                getAriaLabel={() => 'Sqm range'}
                min={props.range[0] || 0}
                step={1}
                max={props.range[1] || 100000}
                value={value}
                onChange={(e, newValue) => setValue(newValue as number[])}
                onChangeCommitted={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <Stack direction='row' justifyContent='space-between'
                sx={{
                    mx: -.5,
                    fontSize: 12,
                    'div':{
                        borderRadius: '5px',
                        border: '1px solid #d7d7d7',
                        p: '5px 10px',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    'div: nth-child(2)':{
                        textAlign: 'right',
                        alignItems: 'flex-end'
                    },
                    'b':{
                        fontWeight: 600,
                        fontSize: 10,
                        color: '#898989',
                        lineHeight: 1
                    }
                }}
            >
                <div>
                    <b>{t('From')}:</b>
                    <span>{formatNumber(value[0])}</span>

                </div>
                <div>
                    <b>{t('To')}:</b>
                    <span>{formatNumber(value[1])}</span>

                </div>
            </Stack>
        </Box>
    );
}