import { Container, Stack } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import HtmlParser from "react-html-parser";
import Image from "next/image";

const initData = [
    {
        image: '/assets/images/about-1.png',
        title: 'Vision',
        text: 'Always be the strongest carbon credit trading platform in ASEAN by building a sustainable world where businesses and production activities flourish within a framework of unwavering environmental and social responsibility.',
    },
    {
        image: '/assets/images/about-2.png',
        title: 'Mission',
        text: 'Our mission is to champion global sustainable development through educating, supporting, and delivering sustainable development in Vietnam and ASEAN countries by validating, measuring and monitoring projects and supply chains for emissions reduction by providing innovative localized solutions for organizations and individuals to minimize their environmental footprint and actively contribute to mitigating climate change.',
    },

]


function Item(props: any) {
    const { index, item } = props
    const text = <Stack direction={'column'} spacing={2}>
        <Typography
            sx={{
                fontSize: 24,
                fontWeight: 500,
                color: '#000',
                textAlign: 'left',
                textTransform: 'uppercase'
            }}
        >
            {item.title}
        </Typography>
        <Typography
            sx={{
                fontSize: 16,
                fontWeight: 500,
                color: '#343434',
                textAlign: 'left'
            }}
        >
            {HtmlParser(item.text)}
        </Typography>
    </Stack>
    const image = <Image
        src={item.image}
        alt='thumb'
        width={745}
        height={450}
        style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
        }}
    />

    return <Grid container>
        <Grid item lg={6} px={{xs:0, lg:1.5}}>
            {index % 2 == 0 ? text : image}
        </Grid>
        <Grid item lg={6} pt={{
            xs: 3,
            sm: 3,
            md: 3,
            lg: 0,
            xl: 0,
        }} px={{xs:0, lg:1.5}}>
            {index % 2 == 0 ? image : text}
        </Grid>
    </Grid>
}
export default function Services(props: any) {
    const {data} = props

    const finalData = [
        {
            image: data[2]?.thumb || initData[0].image,
            title: data[2]?.title || initData[0].title,
            text: data[2]?.intro || initData[0].text
        },
        {
            image: data[3]?.thumb || initData[1].image,
            title: data[3]?.title || initData[1].title,
            text: data[3]?.intro || initData[1].text
        },
    ]

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Container maxWidth='xl'>
                <Stack direction={'column'} width={'100%'} spacing={10} pb={5}
                >
                    {finalData.map((item, index) => (
                        <Item key={index} item={item} index={index} />
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}