import ViewNewPage from "@/views/news/ViewNewPage";
import Head from "next/head";
import { Fragment } from "react";

import dynamic from 'next/dynamic'
import { LoadingData } from "@/components/dialog/loadingDialog";
 
const DynamicNews = dynamic(() => import('@/views/news/ViewNewPage'), {
    ssr: false,
  loading: () => <LoadingData/>,
})
 
export default function New() {
    return (
        <Fragment>
            <Head>
                <title>CCTPA - News</title>
            </Head>
            <DynamicNews/>
        </Fragment>
    )
}
