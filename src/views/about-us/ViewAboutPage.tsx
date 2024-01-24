import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import OurStory from "./components/OurStory";
import CoreValues from "./components/CoreValues";
import OurCommunity from "./components/OurCommunity";
import Experts from "./components/Experts";
import JoinUs from "../home/components/OurPartner";
import { useRouter } from "next/router";
import { getAboutContentAPI } from "@/api/home";


export default function ViewAboutPage(props: any) {
    const { t } = useTranslation()
    const [data, setData] = useState<any[]>([]);
    const router = useRouter()
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        if (pending) {
            return
        }
        try {
            setPending(true);

            const result = await getAboutContentAPI();
            if (result.success) {
                setData(result.data);
            } else {
                setError(result?.error?.message)
            }
        } catch (err: any) {
            setError(err?.message);
        } finally {
            setPending(false);
        }
    }


    useEffect(() => {
        getData()
    }, [router.locale])

    return (
        <Fragment>
            <Stack direction={'column'} width={'100%'} alignItems={'center'} spacing={15} sx={{background: 'linear-gradient(180deg, rgba(241,247,240,1) 0%, rgba(220,255,220,1) 25%, rgba(241,247,240,1) 50%, rgba(220,255,220,1) 75%, rgba(241,247,240,1) 100%)'}}>
                <Welcome data={data}/>
                <OurStory data={data}/>
                <Services  data={data}/>
                <CoreValues data={data}/>
                <OurCommunity data={data}/>
                <Experts data={data}/>
                <JoinUs/>
            </Stack>
        </Fragment>
    )
}