import { COLOR } from "@/constant/common";
import Link from "next/link";
import { Fragment } from "react";

export default function PageNotFound() {
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
                }}
            >
                <h1>500</h1>
                <h2>
                    <Link href="/">
                        <a style={{
                            color: COLOR.Yellow,
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                        }}
                        >
                            Go To Home Page
                        </a>
                    </Link>
                </h2>
                <p>Sorry, the content you are looking for could not be found.</p>
            </div>
        </Fragment>
    );
}