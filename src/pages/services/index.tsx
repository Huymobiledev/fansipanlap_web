import ViewServicesPage from "@/views/services/ViewServicesPage";
import Head from "next/head";
import { Fragment } from "react";

export default function Service() {

    return (
        <Fragment>
            <Head>
                <title>CCTPA - Services</title>
            </Head>
            <ViewServicesPage/>
        </Fragment>
    )
}
