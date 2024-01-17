import { ButtonBase, Stack } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import router from 'next/router';

export default function FilterBar(props: any){
    const { data }: { data: any[] } = props
    const {_atx} = router.query
    if (!data || data.length === 0) {
        return <></>
    }

    return(
        <Fragment>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width={'100%'} py={5}
                sx={{
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {data.map((item, index) => (
                    <ButtonBase key={item.category_id}
                        sx={{
                            borderRadius: '59px',
                            border: '1px solid #CECECE',
                            fontSize: '10px !important',
                            height: '40px !important',
                            px: 2,
                            textTransform: 'uppercase',
                            fontWeight: '600 !important',
                            background: _atx !== item.slug ? '#fff': '#000',
                            color: _atx === item.slug ? '#fff': '#000',
                        }}
                        onClick={() => router.push(`${router.pathname}?_atx=${item.slug}`)}
                    >
                        {item.name}
                    </ButtonBase>
                ))}
            </Stack>
        </Fragment>
    )
}

function seEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
