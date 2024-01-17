import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import { getServiceContentAPI } from "@/api/home";
import { useRouter } from "next/router";


export default function ViewServicesPage(props: any) {
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

            const result = await getServiceContentAPI();
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
                <Welcome data={data}/>
                <Services data={data}/>
            </Stack>
        </Fragment>
    )
}