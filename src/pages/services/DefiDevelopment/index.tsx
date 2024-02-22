import ViewServicesPage from "@/views/services/ViewServicesPage";
import Head from "next/head";
import { Fragment } from "react";
import ViewServiceDetails from "../serviceDetail";

export default function Service() {

    return (
        <Fragment>
            <Head>
                <title>FansipanLabs - Services</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"/>
            </Head>
            <ViewServiceDetails id={3}/>
        </Fragment>
    )
}
