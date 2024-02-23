import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    EmailShareButton,
} from "react-share";

const serviceDetail = [
    {
        link: 'https://fansipanlabs.com/services/BlockchainConsultingServices',
        title: 'Blockchain Consulting Services',
        description: 
            <Box sx={{
                'li' : {
                    mb: 1
                }
            }}>
                <Typography>
                    In the rapidly evolving landscape of blockchain technology, navigating its complexities can be daunting. At Fansipan Labs, our Blockchain Consulting Services offer a comprehensive approach to help businesses harness the full potential of blockchain solutions. Our seasoned consultants bring deep expertise and industry insights to guide you through every stage of blockchain adoption, integration, and optimization tailored to your unique business needs.
                </Typography>
                <br></br>
                <Typography>
                <b>What We Offer:</b>
                <br></br>
                <ul style={{listStyle: 'none',}}>
                    <li>
                    Strategic Planning: Our consulting team works closely with you to understand your business objectives, industry dynamics, and technological requirements. We develop a strategic roadmap for blockchain integration that aligns with your long-term goals and maximizes ROI.
                    </li>
                    <li>
                    Technology Assessment: Evaluating the diverse landscape of blockchain platforms, protocols, and consensus mechanisms can be overwhelming. We conduct thorough assessments to identify the most suitable technologies that meet your performance, scalability, and security requirements.
                    </li>
                    <li>
                    Use Case Identification: Not all business processes are ideal candidates for blockchain integration. Our consultants conduct rigorous analysis to identify use cases where blockchain technology can deliver tangible value, enhance transparency, streamline operations, and drive innovation.
                    </li>
                    <li>
                    Architecture Design: Designing a robust and scalable blockchain architecture is critical for long-term success. We collaborate with your team to design customized architectures that ensure optimal performance, data privacy, and interoperability across your ecosystem.
                    </li>
                    <li>
                    Security and Compliance: Security is paramount in blockchain implementations. We employ best practices and industry standards to mitigate risks, protect sensitive data, and ensure compliance with regulatory requirements, safeguarding your assets and reputation.
                    </li>
                    <li>
                    Training and Education: Empowering your team with the knowledge and skills necessary to navigate the complexities of blockchain technology is essential for successful implementation. We offer tailored training programs and workshops to equip your team with the expertise needed to leverage blockchain solutions effectively.
                    </li>
                </ul>
                <b>Why Choose Us:</b>
                <br></br>
                <ul style={{listStyle: 'none',}}>
                    <li>
                    Expertise: Our team comprises seasoned professionals with deep expertise in blockchain technology, cryptography, distributed systems, and enterprise architecture.
                    </li>
                    <li>
                    Industry Insights: We stay abreast of the latest trends, developments, and emerging use cases in blockchain technology across diverse industries, enabling us to provide strategic guidance and actionable insights tailored to your specific sector.
                    </li>
                    <li>
                    Client-Centric Approach: We prioritize collaboration and transparency, working closely with our clients to understand their unique challenges, goals, and requirements. Our client-centric approach ensures that we deliver solutions that align with your vision and expectations.
                    </li>
                    <li>
                    Proven Track Record: With a proven track record of successful blockchain implementations across various industries, we have earned a reputation for delivering high-quality solutions that drive tangible business outcomes and competitive advantage.
                    </li>
                    <li>
                    Unlock the transformative potential of blockchain technology with Fansipan Labs&apos; Blockchain Consulting Services. Partner with us to navigate the complexities, mitigate risks, and unlock new opportunities in the decentralized future.
                    </li>
                </ul>
                </Typography>
            </Box>,
        thumbnail: "1-Consulting.jpg"
    },
    {
        link: 'https://fansipanlabs.com/services/SmartContractsDevelopment',
        title: 'Smart Contracts Development: Empower Your Business with Precision and Efficiency',
        description: 
        <Box sx={{'p': {}}}>
            <Typography sx={{mb: 2}}>
            In the dynamic landscape of digital transactions, smart contracts stand as the cornerstone of trust and efficiency. At Fansipan Labs, we offer comprehensive Smart Contracts Development services designed to elevate your business processes to new heights.
            </Typography>
            <Typography sx={{mb: 2}}>
            <b>Automation Redefined:</b>
            <br/>
            Our proficient team harnesses the power of smart contracts to automate intricate processes seamlessly. From supply chain management to financial transactions, we tailor smart contract solutions that streamline operations and minimize manual intervention, unlocking unprecedented levels of efficiency and reliability.
            </Typography>
            <Typography mb={2}>
                <b>
                Enhanced Security:
                </b>
                <br/>
Security is paramount in the digital realm, and our Smart Contracts Development services prioritize robustness and resilience. With our expertise, your smart contracts are fortified against vulnerabilities, ensuring tamper-proof execution and fostering trust among stakeholders.
            </Typography>
            <Typography mb={2}>
                <b>
                Precision and Reliability:
                </b>
                <br>
                </br>
                In the realm of smart contracts, precision is non-negotiable. Leveraging our technical prowess and meticulous attention to detail, we craft smart contracts that execute agreements with unparalleled accuracy and reliability. From payment settlements to asset transfers, rest assured that your transactions are executed flawlessly every time.
            </Typography>
            <Typography mb={2}>
                <b>
                Tailored Solutions:
                </b>
                <br>
                </br>
                Every business is unique, and our Smart Contracts Development services are tailored to meet your specific requirements. Whether you&apos;re a startup venturing into decentralized finance or an enterprise seeking to optimize supply chain management, our team collaborates closely with you to develop smart contract solutions that align seamlessly with your business objectives.
            </Typography>
            <Typography mb={2}>
                <b>
                Future-Proof Your Operations:
                </b>
                <br>
                </br>
                As technology evolves, so do our smart contract solutions. We stay at the forefront of emerging trends and advancements in blockchain technology, ensuring that your smart contracts remain adaptive, scalable, and future-proof, empowering your business to thrive in the ever-changing digital landscape.
            </Typography>



Partner with Fansipan Labs for Smart Contracts Development services that redefine automation, enhance security, and drive precision and efficiency in your business operations. Together, let&apos;s embark on a journey towards innovation and success in the digital era.

        </Box>,
        thumbnail: "2-SmartContract.jpg"

    },
    {
        link: 'https://fansipanlabs.com/services/CrytopcurrencyWalletExchangeDevelopment',
        thumbnail: "3-Currency.png",
        title: 'Crytocurrency Wallet & Exchange Development',
        description: 
        <Box sx={{'p': {}}}>
            <Typography sx={{mb: 2}}>
            In the fast-paced world of digital finance, secure and user-friendly cryptocurrency wallets and exchanges are essential components for seamless transactions. At Fansipan Labs, we offer bespoke Cryptocurrency Wallet & Exchange Development services designed to empower users and businesses alike in navigating the complexities of the evolving digital landscape.            
            </Typography>
            <Typography sx={{mb: 2}}>
            <b>Empowering Digital Currency Transactions:</b>
            <br/>
            Our expert team leverages cutting-edge technology to develop cryptocurrency wallets and exchanges that empower users to seamlessly manage, transfer, and exchange digital assets with unparalleled ease and convenience.
            </Typography>
            <Typography mb={2}>
                <b>
                Tailored Solutions for Every Need:
                </b>
                <br/>
                Recognizing the diverse needs of our clients, we offer tailored solutions that cater to various use cases and requirements. Whether you&apos;re a cryptocurrency enthusiast looking for a secure and intuitive wallet interface or a business seeking to launch a robust cryptocurrency exchange platform, our team collaborates closely with you to bring your vision to life.            
            </Typography>
            <Typography mb={2}>
                <b>
                Seamless and Secure Transactions:
                </b>
                <br>
                </br>
                Security is paramount in the world of digital currencies, and our solutions are engineered with robust security features to safeguard users&apos; assets and data. Through advanced encryption techniques, multi-factor authentication, and rigorous security protocols, we ensure that transactions conducted through our platforms are shielded from potential threats and vulnerabilities.
            </Typography>
            <Typography mb={2}>
                <b>
                Staying Ahead in the Evolving Landscape:
                </b>
                <br>
                </br>
                The cryptocurrency landscape is constantly evolving, and our solutions are designed to adapt and scale with the changing needs of the industry. We stay abreast of emerging trends and technological advancements to deliver innovative solutions that keep you ahead of the curve in the dynamic world of digital finance.
            </Typography>
            <Typography mb={2}>
                <b>
                User-Centric Design:
                </b>
                <br>
                </br>
                User experience is at the forefront of our development process. We prioritize intuitive interfaces, seamless navigation, and responsive design to enhance user engagement and satisfaction, ensuring that interacting with your cryptocurrency wallet or exchange is a smooth and rewarding experience for all users.            
            </Typography>
            Partner with Fansipan Labs to harness the power of digital currencies through our Cryptocurrency Wallet & Exchange Development services. Together, let&apos;s embark on a journey towards revolutionizing digital finance and unlocking new opportunities in the digital economy.
        </Box>,
    },
    {
        link: 'https://fansipanlabs.com/services/DefiDevelopment',
        thumbnail: "4-Defi.jpg",
        title: 'DeFi Development: Pioneering Decentralized Finance Solutions',
        description: 
        <Box sx={{'p': {}}}>
            <Typography sx={{mb: 2}}>
            In the ever-evolving landscape of finance, decentralized finance (DeFi) stands as a beacon of innovation and inclusivity. At Fansipan Labs, we specialize in DeFi Development, offering cutting-edge solutions that unlock the limitless possibilities of decentralized finance, revolutionizing traditional financial services and democratizing access to global markets.
            </Typography>
            <Typography sx={{mb: 2}}>
            <b>Building Decentralized Applications (dApps):</b>
            <br/>
            Our expert team excels in crafting decentralized applications (dApps) that redefine the way financial services are accessed and utilized. From lending and borrowing platforms to decentralized exchanges and asset management solutions, we leverage blockchain technology to create dApps that empower users with unparalleled control over their finances.            
            </Typography>
            <Typography mb={2}>
                <b>
                Liquidity Protocols and Automated Market Makers:                
                </b>
                <br/>
                Liquidity is the lifeblood of DeFi, and our expertise extends to developing liquidity protocols and automated market makers (AMMs) that facilitate seamless asset trading and liquidity provisioning. Through innovative algorithms and advanced smart contract architectures, we optimize liquidity pools to ensure efficient price discovery and minimal slippage for traders and liquidity providers alike.                
                </Typography>
            <Typography mb={2}>
                <b>
                Yield Farming Platforms and Staking Mechanisms:
                </b>
                <br>
                </br>
                Yield farming and staking have emerged as cornerstones of DeFi, offering users the opportunity to earn passive income by participating in liquidity provision and network governance. Our DeFi Development services encompass the design and implementation of yield farming platforms, staking mechanisms, and governance protocols that empower users to maximize their returns while contributing to the growth and sustainability of decentralized ecosystems.
            </Typography>
            <Typography mb={2}>
                <b>
                Driving Innovation in Financial Services:                
                </b>
                <br>
                </br>
                At Fansipan Labs, we are committed to driving innovation in financial services through DeFi Development. By harnessing the power of blockchain technology and decentralized networks, we empower individuals and businesses to transact, invest, and interact with financial instruments in a trustless and transparent manner, without the need for intermediaries or centralized authorities.
            </Typography>
            <Typography mb={2}>
                <b>
                Partner with Fansipan Labs:
                </b>
                <br>
                </br>
                Explore the boundless possibilities of decentralized finance with Fansipan Labs as your trusted partner. Together, let&apos;s embark on a journey to unlock new opportunities, drive innovation, and shape the future of finance through decentralized solutions that empower and enrich the lives of millions around the globe.
            </Typography>
        </Box>
    },
    {
        link: 'https://fansipanlabs.com/services/NFTDevelopment',
        thumbnail: "5-NFT.jpg",
        title: 'NFT Development: Unlocking Unique Digital Assets and Ownership',
        description:
        <Box sx={{'p': {}}}>
            <Typography sx={{mb: 2}}>
            In the vibrant ecosystem of digital creativity and ownership, non-fungible tokens (NFTs) have emerged as a revolutionary force, empowering individuals and businesses to tokenize and trade unique digital assets like never before. At Fansipan Labs, we specialize in NFT Development, offering tailored services that enable the creation, trading, and ownership of one-of-a-kind digital assets across diverse industries and applications.
            </Typography>
            <Typography sx={{mb: 2}}>
                <b>
                    Enabling Unique Digital Asset Creation:
                </b>
            <br/>
            Our expert team collaborates closely with artists, creators, and innovators to transform their visions into unique digital assets through NFT development. From digital artwork and collectibles to virtual real estate and in-game assets, we harness blockchain technology to tokenize and immortalize creative expressions, providing creators with new avenues for monetization and recognition.
            </Typography>
            <Typography mb={2}>
                <b>
                Facilitating Seamless Trading and Ownership:
                </b>
                <br/>
                Through our specialized NFT development services, we empower individuals and businesses to participate in the vibrant marketplace of digital assets with ease and efficiency. Our solutions facilitate seamless trading, allowing users to buy, sell, and exchange NFTs across diverse platforms and ecosystems, while ensuring transparent ownership records and provenance verification.
            </Typography>
            <Typography mb={2}>
                <b>
                Exploring Diverse Industries and Applications:
                </b>
                <br>
                </br>
                The potential applications of NFTs extend far beyond the realm of art and collectibles. From gaming and entertainment to real estate, fashion, and beyond, NFTs are transforming industries and redefining the concept of ownership in the digital age. Our NFT development services cater to a wide range of industries and use cases, enabling businesses to leverage the power of tokenization to unlock new sources of value and innovation.
            </Typography>
            <Typography mb={2}>
                <b>
                Driving Innovation and Creativity:
                </b>
                <br>
                </br>
                At Fansipan Labs, we are committed to driving innovation and creativity through NFT development. By providing individuals and businesses with the tools and technology to tokenize and trade unique digital assets, we empower creators to explore new frontiers of expression, ownership, and collaboration in the digital realm.
            </Typography>
            <Typography mb={2}>
                <b>
                Partner with Fansipan Labs:
                </b>
                <br>
                </br>
                Dive into the world of non-fungible tokens with Fansipan Labs as your trusted partner. Together, let&apos;s unlock the full potential of NFTs and shape the future of digital ownership and creativity, one unique token at a time.
            </Typography>
        </Box>
    },
    {
        link: 'https://fansipanlabs.com/services/dAppDevelopment',
        thumbnail: "6-D-App.png",
        title: 'dApp Development: Transforming Vision into Reality',
        description:
        <Box sx={{'p': {}}}>
            <Typography sx={{mb: 2}}>
            In the ever-evolving landscape of decentralized applications (dApps), innovation and user experience reign supreme. At Fansipan Labs, we specialize in dApp Development, offering comprehensive services that empower businesses to realize their vision and deliver scalable, decentralized solutions that revolutionize user experiences and drive meaningful engagement.
            </Typography>
            <Typography sx={{mb: 2}}>
                <b>
                Bringing Vision to Life:
                </b>
            <br/>
            Our expert team collaborates closely with clients to transform their ideas and concepts into fully functional dApps. Whether you&apos;re envisioning a decentralized social network, a blockchain-based marketplace, or a decentralized finance (DeFi) platform, we possess the technical expertise and creative ingenuity to bring your vision to life.
            </Typography>
            <Typography mb={2}>
                <b>
                Scalable and Decentralized Solutions:
                </b>
                <br/>
                Scalability and decentralization are at the core of our dApp development philosophy. Leveraging blockchain technology and decentralized protocols, we design and implement solutions that can seamlessly accommodate growing user bases and transaction volumes while preserving the integrity and security of the underlying network.
            </Typography>
            <Typography mb={2}>
                <b>
                Revolutionizing User Experiences:
                </b>
                <br>
                </br>
                User experience is paramount in the success of any dApp. Our dApp development services prioritize intuitive design, seamless navigation, and responsive performance to deliver immersive and engaging user experiences that captivate audiences and drive long-term user retention and loyalty.
            </Typography>
            <Typography mb={2}>
                <b>
                Empowering Meaningful Engagement:
                </b>
                <br>
                </br>
                At Fansipan Labs, we believe that meaningful engagement is the key to unlocking the full potential of dApps. Whether through gamification, community-driven features, or incentive mechanisms, we empower businesses to foster vibrant and active user communities that contribute to the growth and sustainability of their decentralized ecosystems.
            </Typography>
            <Typography mb={2}>
                <b>
                Future-Proofing Your dApp:
                </b>
                <br>
                </br>
                As technology evolves, so too do our dApp development solutions. We stay at the forefront of emerging trends and advancements in blockchain technology to ensure that your dApp remains adaptive, scalable, and future-proof, enabling you to stay ahead of the curve and maintain a competitive edge in the dynamic world of decentralized applications.
            </Typography>
            <Typography mb={2}>
                <b>
                Partner with Fansipan Labs:
                </b>
                <br>
                </br>
                Transform your vision into reality with Fansipan Labs as your trusted partner in dApp development. Together, let&apos;s revolutionize user experiences, drive meaningful engagement, and shape the future of decentralized applications in the digital age.
            </Typography>
        </Box>
    }
]

    export default function ViewServiceDetails({id} : {id: number}) {
    const service = serviceDetail[id]
    console.log(id)
    return (
        <Fragment>
            <Container maxWidth='xl'
                sx={{
                    my: 7
                }}
            >
                <Grid container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid item lg={8} xs={12}
                        sx={{
                            '.time': {
                                fontSize: 14,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                color: '#CECECE',
                            },
                            
                        }}
                    >  
                        <Box sx={{
                            width: '100%', 
                            display: 'block',
                            mb: {xs: 2, md: 3, lg: 5},
                            'img' : {
                                objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px'
                            }}}>
                        <img src={`/assets/images/${service.thumbnail}`}></img>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                'img': {
                                    maxWidth: '100% !important',
                                    objectFit: 'contain !important'
                                },
                                'figure':{
                                    margin: 'auto !important'
                                },
                                '*':{
                                    maxWidth: '100%',
                                    textAlign: 'left !important'
                                }
                            }}
                        >
                            <Stack direction={'column'} spacing={5}>
                                <Typography variant='h1'
                                
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: {xs: '22px', md: '24px'},
                                    fontWeight: 700,
                                    lineHeight: '29px',
                                    letterSpacing: "0em",
                                    textAlign: 'left'
                                }}>
                                    {service.title}
                                </Typography>
                                <Typography 
                                
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    lineHeight: '19.5px',
                                    textAlign: 'left'
                                }}>
                                    {service.description}
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item lg={1} xs={12}>
                        <Stack direction={'column'} spacing={3} ml={[0, 0, 0, 5, 5]}
                            sx={{
                                mt: {
                                    xs: 10,
                                    lg: 0,
                                },
                                position: {
                                    xs: 'sticky',
                                    lg: 'fixed'
                                }

                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#071F06',
                                        fontSize: 12,
                                        fontWeight: 700
                                    }}
                                >
                                    Share
                                </Typography>

                                <Stack direction={{lg:'column', xs: 'row'}} alignItems={'flex-start'} spacing={2} pt={2}>
                                    <TelegramShareButton url={service.link}>
                                        <IconButton
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                p: 0
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0009 22.9091C18.0258 22.9091 22.91 18.025 22.91 12C22.91 5.97511 18.0258 1.09094 12.0009 1.09094C5.97596 1.09094 1.0918 5.97511 1.0918 12C1.0918 18.025 5.97596 22.9091 12.0009 22.9091ZM5.89644 11.8741C9.39444 10.3501 11.7284 9.34506 12.8954 8.85906C16.2269 7.47306 16.9214 7.23156 17.3714 7.22406C17.5372 7.22053 17.7 7.26934 17.8364 7.36355C17.9323 7.44674 17.9933 7.56294 18.0074 7.68906C18.0314 7.84535 18.0379 8.00382 18.0269 8.16156C17.8469 10.0591 17.0654 14.6626 16.6679 16.7881C16.4999 17.6881 16.1684 17.9881 15.8474 18.0181C15.2969 18.0691 14.8484 17.7511 14.3519 17.3971C14.338 17.3871 14.3239 17.3771 14.3098 17.367C14.1925 17.2833 14.0715 17.1969 13.9469 17.1166C13.3949 16.7536 12.9689 16.4641 12.5429 16.1731C12.1514 15.9061 11.7584 15.6406 11.2679 15.3166C10.2494 14.6446 10.6754 14.2336 11.2454 13.6846C11.3409 13.5931 11.435 13.5001 11.5274 13.4056C11.5616 13.3701 11.7042 13.2373 11.9122 13.0435C11.9597 12.9992 12.0106 12.9517 12.0644 12.9016L12.1136 12.8558C13.0548 11.98 14.7892 10.3662 14.8334 10.1761C14.8409 10.1446 14.8484 10.0261 14.7779 9.96456C14.7089 9.90156 14.6039 9.92256 14.5289 9.94056C14.4239 9.96456 12.7364 11.0791 9.46794 13.2856C8.98944 13.6156 8.55594 13.7746 8.16594 13.7656C7.73844 13.7566 6.91344 13.5241 6.30144 13.3246L6.03894 13.2421L6.0369 13.2414C5.41544 13.0452 4.95899 12.9012 5.00394 12.5371C5.03094 12.3211 5.32944 12.0991 5.89644 11.8741Z" fill="#071F06" />
                                            </svg>
                                        </IconButton>
                                    </TelegramShareButton>
                                    <TwitterShareButton url={service.link}>
                                        <IconButton
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                p: 0
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.5751 23 23.5 18.0751 23.5 12C23.5 5.92487 18.5751 1 12.5 1C6.42487 1 1.5 5.92487 1.5 12C1.5 18.0751 6.42487 23 12.5 23ZM18.733 8.89677C19.3423 8.82554 19.9378 8.66455 20.5 8.41902C20.0861 9.03015 19.5646 9.56102 18.961 9.98576L18.9715 10.378C18.9715 14.3823 15.877 19 10.2168 19C8.54694 19.0025 6.91094 18.5295 5.5 17.6365C5.74075 17.6635 5.98525 17.6785 6.23425 17.6785C7.61636 17.6823 8.96055 17.2267 10.0555 16.3832C9.41713 16.3743 8.7974 16.1668 8.28236 15.7895C7.76733 15.4122 7.38256 14.8839 7.1815 14.278C7.36975 14.3155 7.5625 14.3343 7.76125 14.3343C8.03469 14.3342 8.30696 14.2986 8.57125 14.2285C7.165 13.9495 6.10375 12.7248 6.10375 11.2563V11.2188C6.53202 11.453 7.00936 11.5833 7.49725 11.599C7.07763 11.3253 6.73281 10.9514 6.49397 10.5111C6.25512 10.0707 6.12977 9.57774 6.12925 9.07677C6.12806 8.5411 6.27162 8.01507 6.54475 7.55427C7.32382 8.4937 8.29016 9.26042 9.38213 9.80549C10.4741 10.3506 11.6677 10.662 12.8868 10.72C12.8343 10.4988 12.8073 10.267 12.8073 10.03C12.8073 8.35752 14.185 7.00002 15.8845 7.00002C16.3042 6.99849 16.7199 7.0825 17.1061 7.2469C17.4923 7.41131 17.8409 7.65267 18.1307 7.95627C18.8191 7.82247 19.48 7.57402 20.086 7.22127C19.8535 7.9256 19.3726 8.52119 18.733 8.89677Z" fill="#071F06" />
                                            </svg>
                                        </IconButton>
                                    </TwitterShareButton>
                                    <FacebookShareButton url={service.link}>
                                        <IconButton
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                p: 0
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9401 22.8295C19.0899 21.9131 23 17.4131 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 17.3731 4.85246 21.8465 9.94589 22.8085V14.4938H7V11.2953H9.94589V8.67929C9.94589 8.20141 9.94589 5 14.0396 5C15.7387 5 17 5.5 17 5.5V8.32993H14.8222C14.3913 8.32993 13.9565 8.76973 13.9565 9.09625V11.2838H16.9942C16.8725 12.9612 16.6213 14.4948 16.6213 14.4948H13.9401V22.8295Z" fill="#071F06" />
                                            </svg>
                                        </IconButton>
                                    </FacebookShareButton>
                                    {/* <IconButton
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            p: 0
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.5751 23 23.5 18.0751 23.5 12C23.5 5.92487 18.5751 1 12.5 1C6.42487 1 1.5 5.92487 1.5 12C1.5 18.0751 6.42487 23 12.5 23ZM14.3434 6.84997C14.4667 6.55868 14.6081 6.27484 14.7667 6C15.8988 6.20451 16.9975 6.55537 18.033 7.04314C19.913 9.655 20.763 12.8324 20.4289 15.9987C19.2122 16.8878 17.8447 17.565 16.3879 18C16.061 17.5657 15.7725 17.1056 15.5253 16.6246C15.9994 16.4474 16.4563 16.2302 16.891 15.9755C16.7792 15.8983 16.6674 15.8133 16.5556 15.7205C15.295 16.308 13.9138 16.6131 12.5146 16.6131C11.1154 16.6131 9.73415 16.308 8.47357 15.7205C8.36886 15.8139 8.25671 15.8992 8.13815 15.9755C8.57044 16.2323 9.02786 16.4471 9.50378 16.6169C9.24591 17.0872 8.94947 17.5368 8.61732 17.9614C7.15861 17.5249 5.78881 16.8478 4.56833 15.9601C4.24205 12.7943 5.09138 9.61954 6.96418 7.00451C8.01149 6.52662 9.12108 6.18869 10.2625 6C10.4211 6.27484 10.5624 6.55868 10.6857 6.84997C11.8974 6.66456 13.1317 6.66456 14.3434 6.84997ZM8.8225 13.6596C9.09053 13.9477 9.46352 14.1242 9.86316 14.152C10.2635 14.1261 10.6377 13.9502 10.9061 13.6616C11.1746 13.373 11.3161 12.9945 11.3007 12.6066C11.3161 12.2186 11.1746 11.8401 10.9061 11.5515C10.6377 11.263 10.2635 11.087 9.86316 11.0612C9.46278 11.087 9.08861 11.263 8.82017 11.5515C8.55174 11.8401 8.4102 12.2186 8.42565 12.6066C8.41223 12.994 8.55446 13.3714 8.8225 13.6596ZM14.1253 13.6596C14.3933 13.9477 14.7663 14.1242 15.166 14.152C15.5671 14.128 15.9425 13.9527 16.2113 13.6637C16.4802 13.3746 16.621 12.995 16.6035 12.6066C16.621 12.2181 16.4802 11.8385 16.2113 11.5495C15.9425 11.2605 15.5671 11.0851 15.166 11.0612C14.7656 11.087 14.3914 11.263 14.123 11.5515C13.8546 11.8401 13.713 12.2186 13.7285 12.6066C13.715 12.994 13.8573 13.3714 14.1253 13.6596Z" fill="#071F06" />
                                        </svg>
                                    </IconButton> */}
                                    <EmailShareButton url={service.link}>
                                        <IconButton
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                p: 0
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM8.5 18C6.4 18 5 16.9412 5 14.4706V9.85633L9.00609 12.0645L9.00788 12.0655C9.86745 12.5363 10.9517 12.75 11.9931 12.75C13.0345 12.75 14.1188 12.5363 14.9784 12.0655L19 9.85585V14.4706C19 16.9412 17.6 18 15.5 18H8.5ZM18.8514 8.26472C18.7788 8.27942 18.7073 8.30519 18.639 8.3427L14.2575 10.7501C13.675 11.069 12.8555 11.25 11.9931 11.25C11.131 11.25 10.3117 11.0691 9.72927 10.7504L9.7284 10.7499L5.36219 8.34319C5.29356 8.30536 5.22159 8.27942 5.14864 8.26466C5.56094 6.69264 6.80151 6 8.5 6H15.5C17.1985 6 18.4391 6.69266 18.8514 8.26472Z" fill="#071F06" />
                                            </svg>
                                        </IconButton>
                                    </EmailShareButton>

                                </Stack>
                            </Box>


                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Fragment >
    )
}