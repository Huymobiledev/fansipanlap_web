import { Container, Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Stack, Box, Grid} from "@mui/material";



export default function OurProducts(props: any) {
    const {data} = props

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)
    const [is4K, setIs4K] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600 ? false : true)
    setIs4K(window.innerWidth > 2560)
},[window.innerWidth])

    const products = [
        {productName: 'Custodial Wallet SDK',
        imgSrc: '/assets/images/OurProduct1.png'},
        {productName: 'NFT Marketplace',
        imgSrc: '/assets/images/OurProduct2.png'},
        {productName: 'X-to-Win Gameplay',
        imgSrc: '/assets/images/OurProduct3.png'},
        {productName: 'Tokenize RWA',
        imgSrc: '/assets/images/OurProduct4.png'},
    ]

    const heading = 'Our Products'

    const intro = data?.billions_to_trillions?.intro || 'Now valued at an estimated $2 billion, the voluntary carbon market must scale to limit the negative impacts of climate change. CCTPA is leading the charge to finance carbon projects designed for impact and growth.\nWe are defined by our full-scope approach, cutting-edge products and a global team with world-class expertise spanning project development, project finance and carbon credit sales.'

    return (
        <Container 
        id="Product"
        sx={{
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            justifyContent: 'center',
            mb: '50px',
            width: '100vw'

        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2"  sx={{
                    width: '50vw',
                    fontSize: `calc(${2}vw + 28px)`,
                    m: 'auto',
                    mb: 2,
                    fontWeight: 700,
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    }
                    
                }}>
                    <span>Our </span>
                    <span>Product</span>
                </Typography>
                    <Grid container sx={{
                        width: '90vw',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: 'lg',
                        m: 'auto'
                    }}>
                        {products.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3} my={2}>
                            <Box 
                        key = {index}
                        sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '150px',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            
                            'img':{
                                width: isOnMobile ? '130%' : '120%',
                                display: 'flex'
                            }
                        }}>
                            <Typography variant="body2" sx={{
                                fontWeight: '700',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                mb: '10px',
                                fontSize: isOnMobile ? '20px' : '24px'
                            }}>
                                {item.productName}
                            </Typography>
                            <img src={item.imgSrc}>
                            </img>
                        </Box>
                        </Grid>
                        
                    ))}    
                    </Grid>
            </ScrollAnimation>
        </Container>
    )
}