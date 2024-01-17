import { COLOR } from "@/constant/common";
import { Box } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

export default function PageNotFound(props: any) {
    return (
        <Fragment>
            <div
                style={{
                    marginTop: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                    textAlign: 'center'
                }}
            >
                <h1>404</h1>
                <Box
                    sx={{
                        color: COLOR.Yellow,
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        background: 'rgba(0, 0, 0, 0.34)',
                        py: 1,
                        px: 2,
                        borderRadius: '21px',
                        fontSize: 24,
                        fontWeight: 700,
                    }}
                >
                    <Link href="/">
                        Go To Home Page
                    </Link>
                </Box>
                <p>{props?.error || 'Sorry, the content you are looking for could not be found.'}</p>
            </div>
        </Fragment>
    );
}