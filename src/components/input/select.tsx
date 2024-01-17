import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createSvgIcon } from '@mui/material';

interface IProps {
    data: any[]
    currentSelected: any
    onChange: (arg: any) => void
    label: string,
}

const ArrowIcon = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.5 9.5L12.5 14.5L17.5 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    'Arrow',
)

export default function FilterSelect(props: IProps) {

    const { data, currentSelected, label } = props

    const handleChange = (event: SelectChangeEvent) => {
        props?.onChange(event.target.value)
    };


    return (
        <Box
            sx={{
                minWidth: 100,
                width: 130,
            }}
        >
            <FormControl fullWidth>
                <Select
                    id="demo-simple-select"
                    displayEmpty
                    value={currentSelected || ''}
                    //label={label}
                    onChange={handleChange}
                    sx={{
                        borderRadius: '8px',
                        height: 30,
                        fontSize: 12,
                        'fieldset': {
                            border: '1px solid #93C19F',

                        },
                        'svg': {
                            color: '#93C19F !important'
                        },
                    }}
                    IconComponent={ArrowIcon}
                >
                    <MenuItem disabled value="">
                        <em>{label}</em>
                    </MenuItem>
                    {data?.map((item: any, index) => (
                        <MenuItem value={item} key={index}>{item?.name || item?.title}</MenuItem>

                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
