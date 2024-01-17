import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopularTradingCredits from "./components/PopularTradingCredits/PopularTradingCredits";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import TheCarbonLifeCycle from "./components/TheCarbonLifeCycle/TheCarbonLifeCycle";
import GetToKnowRealcoin from "./components/GetToKnowRealcoin/GetToKnowRealcoin";
import Backed from "./components/Backed/Backer";
import JoinUs from "./components/JoinUs/JoinUs";
import Services from "./components/Services/Services";
import About from "./components/About";
import ScrollAnimation from "react-animate-on-scroll";
import { getHomeContentAPI } from "@/api/home";
import { useRouter } from "next/router";


export default function ViewHomePage(props: any) {
    const { t } = useTranslation()
    const [data, setData] = useState<any>(null);
    const router = useRouter()
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        if (pending) {
            return
        }
        try {
            setPending(true);

            const result = await getHomeContentAPI();
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
            <Stack direction={'column'} width={'100%'} alignItems={'center'} spacing={20}>
                <Welcome />
                <Intro data={data}/>
                <Services data={data} />
                <About data={data} />
                <PopularTradingCredits />
                <TheCarbonLifeCycle data={data}/>
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <GetToKnowRealcoin />
                </ScrollAnimation>
                <JoinUs />
            </Stack>
        </Fragment>
    )
}