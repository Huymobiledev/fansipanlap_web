import { SearchIcon } from "@/components/icons/icons";
import { Box, ButtonBase, IconButton, InputBase } from "@mui/material";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


export interface Iprops {
    label: string,
    value: any,
    onChange: (arg: string) => void
    onMax: () => void
}

export default function InputAmountWithMax(props: Iprops) {
    const { label, value, onChange , onMax} = props
    const { t } = useTranslation();

    return (
        <Fragment>
            <Box
                sx={{
                    //background: 'red',
                    border: '1px solid #d7d7d7',
                    //backdropFilter: 'blur(25px)',
                    borderRadius: '55px',
                    height: 50,
                    minWidth: 300,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                }}
            >

                <InputBase fullWidth
                    placeholder={label}
                    value={value || ''}
                    sx={{
                        fontSize: 16,
                    }}
                    onChange={(e) => onChange(e.target.value)}
                />
                <ButtonBase
                    sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#22AD01'
                    }}
                    onClick={onMax}
                >
                    MAX
                </ButtonBase>
            </Box>
        </Fragment>
    );
}
