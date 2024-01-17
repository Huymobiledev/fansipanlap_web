import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

interface IPorps {
    value?: string | number,
    defaultValue?: string | number,
    onChange: (arg: any) => void
    error?: string
    label?: string
    note?: string
    id?: string
}

export default function InputGender(props: IPorps) {
    const { t } = useTranslation()
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props?.onChange((event.target as HTMLInputElement).value);
      };

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
            <FormControl
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    fontSize: 16,
                    '.MuiFormLabel-root': {
                        minWidth: 100,
                        color: '#898989',
                    },
                    '.Mui-checked': {
                        color: '#22AD01',
                    },
                }}
            >
                <FormLabel id="input-gender-label">{t('Gender')}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="input-gender-label"
                    name="input-gender"
                    defaultValue={props.defaultValue}
                    onChange={handleChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label={t("Male")} />
                    <FormControlLabel value="female" control={<Radio />} label={t("Female")} />
                    <FormControlLabel value="other" control={<Radio />} label={t("Other")} />
                </RadioGroup>
            </FormControl>
            <div className="note">{t(props.error || '')}</div>
            <div className="note-2">{t(props.note || '')}</div>
        </Box>
    );
}