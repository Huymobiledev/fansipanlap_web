import ViewHomePage from "@/views/home/viewHome";
import Head from "next/head";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default function Home() {

    return (
        <Fragment>
            <Head>
                <title>CCTPA - Home</title>
            </Head>
            <ViewHomePage/>
        </Fragment>
    )
}
