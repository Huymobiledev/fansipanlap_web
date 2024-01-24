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
    }
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

React.useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true)
})
    return (
        <Container
            sx={{
                width: '100%',
                textAlign: 'center',
                py: '50px',
                borderRadius: 3,
                // backgroundColor: '#fafafa',
                
                
        }}>
                <Typography variant="h2" sx={{
                    fontSize: isOnMobile ? '36px' : '48px',
                    fontWeight: 600,
                    'span:first-child':{
                        color: '#363636'
                    },
                    'span:last-child':{
                        color: '#FB471E'
                    }
                }}>
                    <span>Our </span>
                    {isOnMobile && <br/>}

                    <span>Services</span>
                </Typography>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    py: '60px'
                }}
            >
                <Grid container spacing={3}>
                    {initData.map((item, index) => (
                        <Grid item lg={4} key={index}
                            sx={{
                            }}
                        >
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={index * 200} animateOnce={true}>
                                <Stack direction={'column'} spacing={isOnMobile ? 5 : 3}
                                    sx={{
                                        alignItems: 'center',
                                        boxShadow: '1px 1px 2px 0px rgba(0,0,0,.2)',
                                        borderRadius: '20px',
                                        padding: '50px',
                                        backgroundColor: '#fff'
                                    }}>
                                    <img src={"/assets/icons/" + item.icon} alt="" style={{ height: '110px'}} />
                                    <Typography variant="h3"
                                        sx={{
                                            fontSize: isOnMobile ? '20px' : '24px',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            height: '58px',
                                            verticalAlign: 'top',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '100%',
                                            color: '#343434',
                                            fontSize: '16px',
                                            textAlign: 'center',
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 4,
                                            textOverflow: 'ellipsis',
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

            </Box>
        </Container>

    );
}