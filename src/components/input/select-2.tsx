import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createSvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IProps {
    data: string[]
    currentSelected: any
    onChange: (arg: any) => void
    label: string
    error?: string
    note?: string
}

const ArrowIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.5 9.5L12.5 14.5L17.5 9.5" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    'Arrow',
)

export default function BaseSelect(props: IProps) {

    const { data, currentSelected } = props
    //console.log(data)
    const handleChange = (event: SelectChangeEvent) => {
        props?.onChange(event.target.value)
    };

    const {t} = useTranslation()

    return (
        <Box
            sx={{
                minWidth: 100,
                width: 'inherit',
                height: 'inherit',
                fontSize: 16,
                fontWeight: 500,
                color: '#898989',
                '.note': {
                    fontSize: 12,
                    fontStyle: 'italic',
                    color: '#FF0000'
                },
                '.note-2': {
                    fontSize: 12,
                    fontStyle: 'italic',
                    color: '#898989'
                },
            }}
        >
            <Select
                id="demo-simple-select-2"
                value={currentSelected}
                onChange={handleChange}
                sx={{
                    borderRadius: '8px',
                    height: 'inherit',
                    width: 'inherit',
                    fontSize: 16,
                    'fieldset': {
                        border: '1px solid #d7d7d7',

                    },
                    'svg': {
                        color: '#000 !important'
                    },
                    boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.05)',
                    mb: .5,
                }}
                IconComponent={ArrowIcon}
            >
                {data?.map((item: any, index) => (
                    <MenuItem value={item} key={index}>{item}</MenuItem>

                ))}
            </Select>
            <div className="note">{t(props.error || '')}</div>
            <div className="note-2">{t(props.note || '')}</div>
        </Box>
    );
}
