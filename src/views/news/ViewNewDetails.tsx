import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { notFound, redirect } from 'next/navigation';
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { BulletIcon } from "@/components/icons/icons";
import router, { useRouter } from "next/router";
import { getNewsDetails } from "@/api/news";
import moment from "moment";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    EmailShareButton,
} from "react-share";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import PageNotFound from "@/pages/404";
import Head from "next/head";
import LoadingDialog from "@/components/dialog/loadingDialog";

export default function ViewNewDetails(props: any) {
    const dateFormat = 'DD MMM YYYY';
    const { data, error } = props
    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (data && !error) {
            if (data?.lang !== router.locale) {
                const links = data?.links as any[]
                const re_link = links.find((v: any) => v.lang === router.locale)
                if (re_link) {
                    const slug = String(re_link?.link).split('/')?.at(-1)
                    router.replace(`/news/${slug}`, undefined)
                }
            }

        }
    }, [router.locale]);

    const shareUrl = data ? data.links.find((e: { lang: string | undefined; }) => e.lang == router.locale)?.link : undefined;

    const item = data


    if (error) {
        return <PageNotFound />
    }

    if(!data){
        return<LoadingDialog open={true}/>
    }

    return (
        <Fragment>

            <Container maxWidth='xl'
                sx={{
                    my: 10
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
                            'h2': {
                                fontSize: 24,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                mt: 0
                            },
                            '.time': {
                                fontSize: 14,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                color: '#CECECE',
                            },
                            
                        }}
                    >
                        <Typography variant="h2" pb={1} id='title'
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            {item?.title}
                        </Typography>
                        <div className="time">
                            {item ? moment(item?.created_at).format(dateFormat) : ''}
                        </div>
                        {/* <Box
                            sx={{
                                width: '100%',
                                my: [5, 5, 10, 10, 10],
                                aspectRatio: '16/9',
                                'img': {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: {lg:'20px', xs: '8px'},
                                    overflow: 'hidden',
                                }
                            }}
                        >
                            <img src={item?.thumb || '/assets/images/thumb.png'} alt='' />
                        </Box> */}
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
                            {ReactHtmlParser(item?.content)}
                        </Box>
                    </Grid>

                    <Grid item lg={1} xs={12}>
                        <Stack direction={'column'} spacing={3} ml={[0, 0, 0, 5, 5]}
                            sx={{
                                mt: {
                                    xs: 10,
                                    lg: 0,
                                    position: 'fixed'
                                }
                            }}
                        >
                            {/* <IconButton
                                sx={{
                                    width: 44,
                                    height: 44,
                                    background: '#f0f0f0'
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 21H5V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21ZM20 8H13L14.122 4.632C14.2221 4.33141 14.2494 4.01135 14.2016 3.69815C14.1538 3.38496 14.0322 3.08761 13.847 2.83059C13.6617 2.57358 13.4181 2.36424 13.1361 2.21984C12.8541 2.07543 12.5418 2.00008 12.225 2H12L7 7.438V21H18L21.912 12.404L22 12V10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8Z" fill="#071F06" />
                                </svg>
                            </IconButton> */}
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#071F06',
                                        fontSize: 12,
                                        fontWeight: 700
                                    }}
                                >
                                    {t('Share')}
                                </Typography>

                                {shareUrl && <Stack direction={{lg:'column', xs: 'row'}} alignItems={'flex-start'} spacing={2} pt={2}>
                                    <TelegramShareButton url={shareUrl}>
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
                                    <TwitterShareButton url={shareUrl}>
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
                                    <FacebookShareButton url={shareUrl}>
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
                                    <EmailShareButton url={shareUrl}>
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
                                }
                            </Box>


                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Fragment >
    )
}