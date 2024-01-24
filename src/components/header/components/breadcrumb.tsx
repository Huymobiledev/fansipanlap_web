import { Box, Breadcrumbs, Stack } from "@mui/material";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const Route2LabelMap: { [value: string]: string } = {
    "": "Home",
    "my-nfts": "My NFTs",
    "locked-nfts": "Locked NFTs",
    "sell-nfts": "Sell NFTs",
};

const removeLastBlackPath = (value: string[]) => {
    if (value.at(-1) === '') {
        return (value.splice(-1))
    }
    return value
}

export default function BreadCrumbs() {

    const [crumbs, setCrumbs] = useState<any[]>([]);
    const router = useRouter()

    useEffect(() => {
        const segmentsPath = removeLastBlackPath(router.asPath.split("/"));
        const segmentsRoute = removeLastBlackPath(router.route.split("/"));

        const crumbs = segmentsPath.map((link, index) => {
            const route = segmentsRoute[index];
            const crumb = {
                link: `${segmentsPath.slice(0, index + 1).join('/')}` || '/',
                label: route === '[id]' ? document?.title : Route2LabelMap[link] || link,
            };
            return crumb;
        });

        setCrumbs(crumbs);

        console.log({
            segmentsPath,
            segmentsRoute,
            crumbs,
        });
    }, [router]);

    return (
        <Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                {crumbs.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            fontSize: 12,
                            color: '#555555',
                            fontWeight: index === crumbs.length - 1 ? 600 : 500,
                            textTransform: 'capitalize',
                        }}
                    >
                        <Link href={item?.link} key={index}>
                            {item?.label}
                        </Link>
                    </Box>
                ))
                }
            </Breadcrumbs>
        </Fragment>
    )
}