import { Box, Stack } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import moment from "moment";


export default function NewItem(props: any) {
    const { item } = props
    const dateFormat = 'DD MMM YYYY';

    return (
        <Fragment>
            <Link href={router.pathname + '/' + item?.slug}>
                <Stack direction={'column'}
                    sx={{
                        textAlign: 'left',
                        pb: {
                            xs: 5,
                            md: 0,
                        },
                        'h3': {
                            my: 0,
                            fontSize: 20,
                            fontWeight: 600,
                            lineHeight: 1.3,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            textOverflow: 'ellipsis',
                        },
                        '.time': {
                            pt: [1, 1, 2.4, 2.4, 2.4],
                            fontSize: 12,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: '#CECECE',
                        },
                        '.desc': {
                            pt: 1,
                            fontSize: 14,
                            fontWeight: 500,
                            color: '#343434',
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            textOverflow: 'ellipsis',
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            'img': {
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                aspectRatio: 2,

                            },
                            pb: 3.2
                        }}
                    >
                        <Image
                            src={item?.thumb || '/assets/images/new-thumb.png'}
                            alt='thumb'
                            width={400}
                            height={200}
                            priority={true}
                        />
                    </Box>

                    <h3>{item?.title}</h3>

                    <div className="desc">
                        {item?.intro}
                    </div>
                    <div className="time">
                        {item ? moment(item?.created_at).format(dateFormat) : ''}
                    </div>
                </Stack>
            </Link>
        </Fragment>
    )
}