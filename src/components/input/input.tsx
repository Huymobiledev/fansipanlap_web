import { Box, InputBase } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface IPorps {
    endAdornment?: React.JSX.Element
    value?: string | number,
    defaultValue?: string,
    type: string
    register: any
    error?: string
    label?: string
    placeholder?: string
    note?: string
    id?: string
}

export default function InputForm(props: IPorps) {
    const { t } = useTranslation()
    return (
        <Fragment>
            <Box width='100%'
                sx={{
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
                <div>{t(props.label || '')}:</div>
                <InputBase fullWidth
                    value={props.value || undefined}
                    defaultValue={props.defaultValue || undefined}
                    placeholder={t(props.placeholder || '')}
                    endAdornment={props?.endAdornment}
                    id={props?.id || ''}
                    type={props.type}
                    {...props.register}
                    sx={{
                        my: .5,
                        borderRadius: '10px',
                        border: '1px solid #D7D7D7',
                        fontSize: 16,
                        height: 50,
                        px: 1.5,
                    }}
                />
                <div className="note">{t(props.error || '')}</div>
                <div className="note-2">{t(props.note || '')}</div>
            </Box>
        </Fragment>
    )
}