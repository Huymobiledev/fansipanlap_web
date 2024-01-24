import { Container, Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Stack, Box} from "@mui/material";


export default function OurProducts(props: any) {
    const {data} = props

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)
})

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
    const headingArr = String(heading).split(' ')

    const intro = data?.billions_to_trillions?.intro || 'Now valued at an estimated $2 billion, the voluntary carbon market must scale to limit the negative impacts of climate change. CCTPA is leading the charge to finance carbon projects designed for impact and growth.\nWe are defined by our full-scope approach, cutting-edge products and a global team with world-class expertise spanning project development, project finance and carbon credit sales.'

    return (
        <Container sx={{
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            backgroundColor: '#fff',
            py: '110px',

        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Typography variant="h2" sx={{
                    fontSize: isOnMobile ? '36px' : '48px',
                    fontWeight: 600,
                    mb: '20px',
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    }
                }}>
                    <span>Our </span>
                    {isOnMobile && <br/>}
                    <span>Product</span>
                </Typography>
                <Stack direction={isOnMobile ? 'column' : 'row'} gap={10}
                    sx = {{
                        textAlign: 'center',
                        py: '10px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >

                    {products.map((item) => (
                        <Box 
                        
                        sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '150px',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            
                            'img':{
                                width: '110%',
                                display: 'flex'
                            }
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                mb: isOnMobile ? '5px' : '10px',
                                fontSize: isOnMobile ? '20px' : '24px'
                            }}>
                                {item.productName}
                            </Typography>
                            <img src={item.imgSrc}>
                            </img>
                        </Box>
                    ))}
                </Stack>
            </ScrollAnimation>
        </Container>
    )
}