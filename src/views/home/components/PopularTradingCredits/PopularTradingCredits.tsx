import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import PopularTradingCreditsTab from "./PopularTradingCreditsTab";
import PopularTradingCreditsTable from "./PopularTradingCreditsTable";
import { ButtonGreen } from "@/components/button";
import ScrollAnimation from "react-animate-on-scroll";

export default function PopularTradingCredits(props: any) {
    const { t } = useTranslation()
    const [tab, setTab] = useState(0)
    return (
        <Fragment>
            <Container maxWidth='xl'>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>

                <Stack direction={'column'} width={'100%'} alignItems={'center'}
                    sx={{
                        textAlign: 'center'
                    }}
                >

                    <h1>{t('Popular Trading Credits')}</h1>
                    <Box
                        sx={{
                            width: '100%',
                            border: '1px solid #d7d7d7',
                            borderRadius: {
                                xs: '15px',
                                md:'30px'
                            },
                            p: [1.5, 1.5, 5, 5, 5],
                        }}
                    >
                        {/* <PopularTradingCreditsTab onChange={setTab} /> */}
                        <Box >
                            <PopularTradingCreditsTable />
                        </Box>

                    </Box>

                    <Stack direction={'row'} justifyContent={'center'} pt={5}>
                        <ButtonGreen
                            sx={{
                                maxWidth: 300
                            }}
                        >
                            {t('Start Trading')}
                        </ButtonGreen>
                    </Stack>
                </Stack>
                </ScrollAnimation>
            </Container>

        </Fragment>
    )
}