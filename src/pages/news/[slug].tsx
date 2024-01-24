import { _getAPISSR, baseAPI } from "@/api/commonSSR";
import { LoadingData } from "@/components/dialog/loadingDialog";
import ViewNewDetails from "@/views/news/ViewNewDetails";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Fragment } from "react";

const DynamicNewsDetails = dynamic(() => import('@/views/news/ViewNewDetails'), {
    ssr: false,
  loading: () => <LoadingData/>,
})

export default function NewDetails(props: any) {
    return (
        <Fragment>
            <DynamicNewsDetails  {...props} />
        </Fragment>
    )
}

// https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    const slug = ctx.params?.slug
    const token = ctx.req.cookies['token']
    const lang = ctx.locale || 'en'
    let data = null
    let error = null
    let time = new Date()
    // try {
    //     const rs = await _getAPISSR(
    //         token,
    //         {},
    //         `${baseAPI}/article/${slug}`,
    //         lang
    //     );
    //     //console.log(slug, rs);
    //     if (rs.success) {
    //         data = rs?.data
    //     } else {
    //         error = rs?.error?.message
    //     }

    // } catch (e) {
    //     console.log(e)
    // }finally{
    //     console.log('excute time:', new Date().getTime() - time.getTime(), 'ms')
    // }

    // return {
    //     props: {
    //         title: 'CCTPA - News - ' + data?.title,
    //         description: data?.title || null,
    //         image: data?.thumb || null,
    //         data,
    //         error
    //     }, // will be passed to the page component as props
    // }
    return {
        props: {
            title: 'CCTPA - News - ',
            description: null,
            image: null,
            data,
            error
        }, // will be passed to the page component as props
    }
}