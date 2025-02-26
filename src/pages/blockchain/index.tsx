
import ViewBlockChain from "@/views/blockchain";
import Head from "next/head";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default function BlockChain() {

    return (
        <Fragment>
            <Head>
                <title>CCTPA - BlockChain</title>
            </Head>
            <ViewBlockChain/>
        </Fragment>
    )
}
