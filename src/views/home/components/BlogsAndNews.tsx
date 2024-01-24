import { Box, Container, Typography, Stack } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";




export default function BlogAndNews(props: any) {
    const { data } = props

    const [page, setPage] = useState<number>(0)
    const [totalPageNumber, setTotalPageNumber] = useState<number>(1)
    const scrollBox = document.getElementById('scrollBox')

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

    let processedNewsTemplate: Array<any> = []

    for (let i = 0; i < 5 ; i++) {
        processedNewsTemplate.push([...newsTemplate.slice(i,)])
    }

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)

    setTotalPageNumber(Math.ceil(newsTemplate.length / 3) -1)
})

    const handleScroll = (e: any) => {
        setPage(Math.ceil(e.target.scrollLeft / e.target.getBoundingClientRect().width))
    //         console.log(scrollBox?.scrollWidth)
    // console.log(scrollBox?.clientWidth)
    //     console.log(totalPageNumber)
    }



    const ImagesComponent = () => {
        const stackGroups = [];

        for (let i = 0; i < newsTemplate.length; i += 3) {
            const imagesInGroup = newsTemplate.slice(i, i + 3).map((item, index) => (
            <Stack key={index}direction={'column'} gap={'8px'}>
                <img
                    key={i + index}
                    src={item.thumbnail}
                    style={{
                    width: isOnMobile ? '90vw' : '375px',
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
            
            ));

            stackGroups.push(
                <Stack
                key={`stackGroup${i / 3}`} // Unique key for each group
                direction={isOnMobile ? 'column' : 'row'}
                alignItems="left"
                gap={3}
                sx={{
                    px: isOnMobile ? '26.5vw' : '35vw', 
                    mx: isOnMobile ? '0vw' : '0vw',
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always'
                }}
            >
                {imagesInGroup}
                </Stack>
            
            );
        }

        return <>{stackGroups}</>;
    };

    const PageMark = () => {
        let dots: Array<any> = []

        for (let i = 0; i <= totalPageNumber; i++) {
            dots.push(
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '3px'}}>
            <rect width="10" height="10" rx="5" fill={i == page ? '#FB471E' : "#E5E5E5"}/>
            </svg>
)
        }
        return <>{dots}</>
    }

    return (
        <Container sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            mb: '20px',
            overflow: 'hidden'
            
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    fontSize: isOnMobile ? '36px' : '48px',
                    fontWeight: 600,
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
                        <Stack direction={'row'} alignItems={'center'} id="scrollBox" sx={{
                            alignItems: 'left',   
                            overflowX: 'scroll',
                            backgroundColor: '#fff',
                            maxWidth: '150vw',
                            p: '10px',
                            scrollSnapType: 'x mandatory',
                            'img' : {
                                boxShadow: '1px 1px 2px 0px rgba(0,0,0,.1)',
                            },
                            '&::-webkit-scrollbar': {
                                width: '0',  
                                },                
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'transparent',
                                },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: '#fff',
                                m:'10px'
                                
                            },
                        }}
                            onScroll = {handleScroll}
                        >
                            <ImagesComponent/>
                        </Stack>
                    <Box justifyContent={'center'}>
                        <PageMark/>
                    </Box>
                    
            </ScrollAnimation>
        </Container>
    )
}