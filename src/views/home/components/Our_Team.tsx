/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function OurTeam(props: any) {
  return (
    <section id={"Team"}>
      <Fragment>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            height: "100vh",
            py: "2vh",
            alignItems: "flex-start",
            justifyContent: "space-between",
            px: {
              xs: "2%",
              md: "10%",
              lg: "15%",
            },
            "& #imgTeam": {
              height: "80vh",
              width: "auto",
              borderRadius: "10px",
              objectFit: "contain",
            },
          }}
        >
          <Typography
            sx={{
              font: "Poppins",
              fontSize: {
                xs: "22px",
                md: "28px",
                lg: "32px",
              },
              fontWeight: 800,
              display: "flex",
              flexDirection: "row",
              color: "#363636",
              letterSpacing: 2,
              textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
              alignItems: "center",
              span: {
                font: "Poppins",
                color: "#0267FD",
                mx: "10px",
                fontSize: {
                  xs: "22px",
                  md: "28px",
                  lg: "32px",
                },
                fontWeight: 800,
              },
            }}
          >
            {"/ Our"}
            <span>{"Team"}</span>
          </Typography>
          <img id="imgTeam" src="/assets/images/Picture7 1.png" />
        </Box>
      </Fragment>
    </section>
  );
}
