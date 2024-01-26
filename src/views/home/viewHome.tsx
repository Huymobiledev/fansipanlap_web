import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OurAward from "./components/OurAward";
import Welcome from "./components/Welcome";
import OurProducts from "./components/OurProducts";
import Backed from "./components/Backed/Backer";
import OurPartner from "./components/OurPartner";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import ScrollAnimation from "react-animate-on-scroll";
// import { getHomeContentAPI } from "@/api/home";
import { useRouter } from "next/router";
import BlogAndNews from "./components/BlogsAndNews";


export default function ViewHomePage(props: any) {
    const { t } = useTranslation()
    const [data, setData] = useState<any>(null);
    const router = useRouter()
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        // if (pending) {
        //     return
        // }
        // try {
        //     setPending(true);

        //     const result = await getHomeContentAPI();
        //     if (result.success) {
        //         setData(result.data);
        //     } else {
        //         setError(result?.error?.message)
        //     }
        // } catch (err: any) {
        //     setError(err?.message);
        // } finally {
        //     setPending(false);
        // }
    }


    // useEffect(() => {
    //     getData()
    // }, [router.locale])

    return (
        <Fragment>
            <Stack direction={'column'} gap={5} width={'100%'} alignItems={'center'} sx={{display: 'flex', position:'relative', backgroundColor: '#fff'}}>
                <Welcome/>
                <OurProducts data={data}/>
                <OurServices data={data}/>
                <OurTeam data={data} />
                {/* <OurAward/> */}
                <OurPartner/>
                <BlogAndNews/>
            </Stack>
        </Fragment>
    )
}