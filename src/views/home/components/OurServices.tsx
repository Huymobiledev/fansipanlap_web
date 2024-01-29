import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const CustomButton = styled(Button)({
    color: '#071F06',
    border: '1px solid #CECECE',
    borderRadius: '59px',
    padding: '0px 30px',
    textTransform: 'uppercase',
    height: '50px',
    fontSize: '12px',
    fontWeight: 600,
    gap: '10px',
    whiteSpace: 'nowrap',
    display: 'flex',
    '&:hover': {
        backgroundColor: '#071F06',
        color: '#FFFFFF',
        borderColor: '#071F06'
    },

});

const initData = [
    {
        title: 'Blockchain Consulting Services',
        description: "Determine the expertise you need, examine your team’s capabilities, verify project specifications, and outline what the product will do and how the tasks will be completed. Then, contact the providers on your shortlist to determine which is the best for you.",
        icon: "Business Contract Handshake Sign.svg"
    },
    {
        title: 'Smart Contracts Development',
        description: 'Creating and implementing self-executing contracts for public and private blockchain networks is a component of our smart contract development. Our team of blockchain developers creates precise, immutable smart contracts that prevent conflicts in the business environment.' ,
        icon: "Hierarchy 9.svg"
    },
    {
        title: 'Cryptocurrency wallet & exchange development',
        description: 'You can now build a digital exchange for different currencies and a wallet for cryptocurrencies with the assistance of our team of blockchain developers.',
        icon: "Crypto Wallet.svg"
    },
    {
        title: 'DeFi Development',
        description: 'Creating safe and secure cryptocurrency wallets that allow you to store information about your wallet balance, cryptocurrency exchange history, and more. Our wallet development products enable the exchange of various digital assets and currencies.',
        icon: "Crypto Encryption Key.svg"
    },
    {
        title: 'NFT Development',
        description: 'Creating and implementing self-executing contracts for public and private blockchain networks is a component of our smart contract development. Our team of blockchain developers creates precise, immutable smart contracts that prevent conflicts in the business environment.',
        icon: "NFT.svg"
    },
    {
        title: 'dApp Development',
        description: 'With many years of  experience in mobile app and dApp development, we handle your entire DApp development process from start to finish, from planning to designing, developing to testing, and supporting to final launch including Apple Appstore and Google Play.',
        icon: "Programming Code.svg"
    }
];


export default function OurServices(props: any) {
    const {data} = props
    const [isOnMobile, setIsOnMobile] = React.useState<boolean>(false)
    const [is4K, setIs4K] = React.useState<boolean>(false)

React.useEffect(() => {
    setIsOnMobile(window.innerWidth <= 425 ? true : false)
    setIs4K(window.innerWidth > 2560)
},[window.innerWidth])
    return (
        <Container
            maxWidth={'lg'}
            sx={{
                width: '75vw',
                textAlign: 'center',
                py: '50px',
                borderRadius: 3,
                px: '0'                
                
        }}>
            <Stack direction={'column'} gap={5} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h2" sx={{
                    width: '50vw',
                    fontSize: `calc(${2}vw + 28px)`,
                    m: 'auto',
                    fontWeight: 700,
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    }
                    
                }}>
                    <span>Our </span>
                    <span>Services</span>
                </Typography>
                <Grid container spacing={3} sx={{justifyContent:'space-evenly', alignItems:'center', flexWrap: 'wrap'}}>
                    {initData.map((item, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index}
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={index * 150} animateOnce={true}>
                                <Stack direction={'column'} gap={'15vh'}
                                    sx={{
                                        alignItems: 'center',
                                        boxShadow: '0px 5px 5px 0px #0000000D',
                                        borderRadius: '20px',
                                        backgroundColor: '#fff',
                                        px: '40px',
                                        pb: '20px',
                                        width: '90vw',
                                        maxWidth: '280px',
                                        m: 'auto',
                                        height: '100%',
                                        maxHeight: '566px'
                                    }}>
                                    <img src={"/assets/icons/" + item.icon} alt="" style={{ height: '50px'}} />
                                    <Typography variant="h3"
                                        sx={{
                                            fontSize: `calc(${1}vw + 20px)`,
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            verticalAlign: 'top',
                                            lineHeight: '35px',
                                            height: '100px',
                                        }}  
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            width: '100%',
                                            color: '#343434',
                                            fontSize: `calc(${.5}vw + 14px)`,
                                            textAlign: 'center',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <CustomButton>Learn more</CustomButton>
                                </Stack>
                            </ScrollAnimation>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
                
        </Container>

    );
}