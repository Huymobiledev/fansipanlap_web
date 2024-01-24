import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import { ButtonBase, Grid } from "@mui/material";
import { LifeCycleLeft, LifeCycleRight } from './Item';
import { useShowMediaUp } from "@/hooks/useResponse";
import ScrollAnimation from "react-animate-on-scroll";

export default function TheCarbonLifeCycle(props: any) {
    const { t } = useTranslation()
    const isDesktop = useShowMediaUp('md')
    const {data} = props

    const heading = data?.the_carbon_lifecycle?.name || 'The Carbon Lifecycle'
    const intro = data?.the_carbon_lifecycle?.intro || 'CCPTA uses technology to increase accuracy and transparency at every stage of the carbon lifecycle.'


    const finalData = [
        {
            title: data?.the_carbon_lifecycle?.articles[0]?.title || 'Carbon projects avoid or sequester greenhouse gas emissions.',
            text:  data?.the_carbon_lifecycle?.articles[0]?.intro || 'We help secure financing for new carbon projects.',
            learnmore:  data?.the_carbon_lifecycle?.articles[0]?.learn_more? data?.the_carbon_lifecycle?.articles[0]?.slug : '',
        },
        {
            title: data?.the_carbon_lifecycle?.articles[1]?.title || 'The project is reviewed and validated. Emissions reductions are verified.',
            text:  data?.the_carbon_lifecycle?.articles[1]?.intro || 'We help projects achieve credit issuance.',
            learnmore:  data?.the_carbon_lifecycle?.articles[1]?.learn_more? data?.the_carbon_lifecycle?.articles[1]?.slug : '',
        },
        {
            title: data?.the_carbon_lifecycle?.articles[2]?.title || 'Carbon credits are issued. 1 carbon credit = tonne of carbon removed or reduced.',
            text:  data?.the_carbon_lifecycle?.articles[2]?.intro || 'We facilitate transparency into the projects that generate carbon credits.',
            learnmore:  data?.the_carbon_lifecycle?.articles[2]?.learn_more? data?.the_carbon_lifecycle?.articles[2]?.slug : '',
        },
        {
            title: data?.the_carbon_lifecycle?.articles[3]?.title || 'Organizations, companies, and individuals buy carbon credits to offset their emissions.',
            text:  data?.the_carbon_lifecycle?.articles[3]?.intro || 'We support leading companies with their carbon procurement and offsetting.',
            learnmore:  data?.the_carbon_lifecycle?.articles[3]?.learn_more? data?.the_carbon_lifecycle?.articles[3]?.slug : '',
        },
        {
            title: data?.the_carbon_lifecycle?.articles[4]?.title || 'Project proponents use carbon revenue to expand and fund new projects.',
            text:  data?.the_carbon_lifecycle?.articles[4]?.intro || 'We are committed to scaling the market so more projects can be performed.',
            learnmore:  data?.the_carbon_lifecycle?.articles[4]?.learn_more? data?.the_carbon_lifecycle?.articles[4]?.slug : '',
        }
    ]

    return (
        <Fragment>
            <Container maxWidth='xl'>
                <Stack direction={'column'} width={'100%'} alignItems={'center'} py={2}
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <h1>{heading}</h1>
                        <p>{intro}</p>
                    </ScrollAnimation>
                    <Grid container pt={6}>
                        <Grid item lg={6}>
                            {isDesktop ?
                                <LifeCycleLeft
                                    index={1}
                                    image="/assets/images/carbon-1.png"
                                    {...finalData[0]}
                                    pl={5}
                                />
                                :
                                <LifeCycleRight
                                    index={1}
                                    image="/assets/images/carbon-1.png"
                                    {...finalData[0]}
                                    pl={5}
                                />
                            }
                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            <LifeCycleRight
                                index={2}
                                image="/assets/images/carbon-2.png"
                                {...finalData[1]}
                            />
                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            {isDesktop ?
                                <LifeCycleLeft
                                    index={3}
                                    image="/assets/images/carbon-3.png"
                                    {...finalData[2]}
                                    color="#4A753F"
                                />
                                :
                                <LifeCycleRight
                                    index={3}
                                    image="/assets/images/carbon-3.png"
                                    {...finalData[2]}
                                    color="#4A753F"
                                />
                            }
                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            <LifeCycleRight
                                index={4}
                                image="/assets/images/carbon-4.png"
                                {...finalData[3]}
                                color="#156B00"
                            />
                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            {isDesktop ?
                                <LifeCycleLeft
                                    index={5}
                                    image="/assets/images/carbon-5.png"
                                    {...finalData[4]}
                                    pl={5}
                                    color="#1B8A00"
                                />
                                :
                                <LifeCycleRight
                                    index={5}
                                    image="/assets/images/carbon-5.png"
                                    {...finalData[4]}
                                    pl={5}
                                    color="#1B8A00"
                                />
                            }
                        </Grid>
                    </Grid>
                </Stack>
            </Container>

        </Fragment>
    )
}