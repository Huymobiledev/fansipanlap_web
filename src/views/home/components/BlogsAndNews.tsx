import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";




export default function BlogAndNews(props: any) {
    const { data } = props

    const [page, setPage] = useState<number>(0)
    const [totalPageNumber, setTotalPageNumber] = useState<number>(1)
    const [startX, setStartX] = useState(null);

    const newsTemplate: Array<any> = [
        {
            type: 'BLOGS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
        {
            type: 'NEWS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
        {
            type: 'NEWS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
        {
            type: 'NEWS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
        {
            type: 'BLOGS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
        {
            type: 'NEWS',
            title: 'Title of blogs & News, default height is 2 lines, overflowing words will be displayed as ...',
            date: '2024 Jan 04 - 17:34:32',
            thumbnail: '/assets/images/20221021-Silde2-Web3Platform 1.png'
        },
    ]

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600)
    setTotalPageNumber(Math.ceil(newsTemplate.length / 3) - 1)
})

    const BlogAndNewsPage = () => {
        return (
            <Grid container justifyContent={'space-between'} alignItems={'center'} id='blogandnews'>
                {newsTemplate.slice(page, page + 3).map((item, index) => (
                    <Grid key={index} item xs={12} sm={3} m='auto' mb={2}>
                        <Stack key={index} direction={'column'} gap={'8px'}>
                            <img
                                key={index}
                                src={item.thumbnail}
                                style={{
                                width: isOnMobile ? '90vw' : '100%',
                                objectFit: 'contain',
                                borderRadius: '10px',
                                marginBottom: '10px'
                            }}
                            />
                            <Typography variant="body2" sx={{
                                fontSize: '12px',
                                fontWeight: 700,
                                pl: '10px',
                                textAlign: 'left',
                                'span:first-child':{
                                    color: '#FB471E'
                                },
                                'span:last-child':{
                                    color: '#999999'
                                }}}>
                                <span>{item.type}</span>
                                <span> | {item.date}</span>
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontSize: isOnMobile ? '20px' : '24px',
                                textAlign: 'left',
                                fontWeight: 500,
                                pl: '10px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2,

                            }}>
                                {item.title}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        )
    }




    return (
        <Container 
            maxWidth={'xxl'}    
        sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            mb: '20px',
            overflow: 'hidden'
            
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    width: '50vw',
                    fontSize: `calc(${2}vw + 28px)`,
                    fontWeight: 700,
                    mx: 'auto',
                    mb: 5,
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    }
                    
                }}>
                        <span>Blog & </span>
                        {isOnMobile && <br/>}
                        <span>News</span>
                </Typography>
                <BlogAndNewsPage/>
                
            </ScrollAnimation>
        </Container>
    )
}