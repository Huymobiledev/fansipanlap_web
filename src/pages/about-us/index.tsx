import ViewAboutPage from "@/views/about-us/ViewAboutPage";
import Head from "next/head";
import { Fragment } from "react";

export default function About() {

    return (
        <Fragment>
            <Head>
                <title>CCTPA - About Us</title>
            </Head>
            <ViewAboutPage/>
        </Fragment>
    )
}
