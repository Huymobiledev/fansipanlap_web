import { SearchIcon } from "@/components/icons/icons";
import { Box, IconButton, InputBase } from "@mui/material";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";


export interface Iprops {
    label: string,
    onChange: (arg: string) => void
}

export default function InputAmount(props: Iprops) {
    const { label, onChange } = props
    const { t } = useTranslation();

    return (
        <Fragment>
            <Box
                sx={{
                    //background: 'red',
                    border: '1px solid #66816D',
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
                    sx={{
                        fontSize: 16,
                    }}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Box>
        </Fragment>
    );
}
