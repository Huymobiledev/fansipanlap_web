import { Box, ButtonBase, Tab, Tabs } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    onChange: (arg: any) => void
}

export default function PopularTradingCreditsTab(props: IProps) {
    const { t } = useTranslation()
    const [tab, setTab] = useState(0)

    const handleChange = (value: any) => {
        setTab(value)
        props?.onChange(value)
    }
    return (
        <Fragment>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <Tabs
                    value={tab}
                    onChange={(event, value) => handleChange(value)}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant='standard'
                    sx={{
                        '.MuiTab-root': {
                            textTransform: 'none',
                            fontSize: 16,
                            fontWeight: 500,

                        },
                        '.MuiTabs-indicator': {
                            backgroundColor: '#343434'
                        },
                        '.Mui-selected': {
                            fontWeight: 700,
                        }
                    }}
                >
                    <Tab label={
                        <Stack direction='row' alignItems={'center'}>
                            <div>Top Future</div>&nbsp;
                            <Box
                                sx={{
                                    border: '1px solid #0094FF',
                                    color: '#0094FF',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    fontSize: 12,
                                }}
                            >
                                Maker 0% / Taker 0.01%
                            </Box>
                        </Stack>
                    }
                        value={0} />
                    <Tab label="Hot" value={1} />
                    <Tab label="Newest" value={2} />
                    <Tab label="Top Columm" value={3} />
                    <Tab label={
                        <Stack direction='row' alignItems={'center'}>
                            <div>Top Gainers</div>&nbsp;
                            <Box
                                sx={{
                                    border: '1px solid #22AD01',
                                    color: '#22AD01',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    fontSize: 12,
                                }}
                            >
                                2,434.43%
                            </Box>
                        </Stack>
                    }
                        value={4} />
                </Tabs>
                <ButtonBase
                    sx={{
                        color: '#22AD01',
                        fontSize: 12,
                        'svg':{
                            ml: 1,
                        },
                        whiteSpace: 'nowrap'
                    }}
                >
                    {t('View more')}
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99997 0.5L0.589966 1.91L5.16997 6.5L0.589966 11.09L1.99997 12.5L7.99997 6.5L1.99997 0.5Z" fill="#22AD01" />
                    </svg>

                </ButtonBase>
            </Stack>
        </Fragment>
    )
}