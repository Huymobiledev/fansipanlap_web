/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function OurProduct(props: any) {
  const [data, setData] = useState<
    { title: string; color: string; img: string }[]
  >([
    {
      title: "Artificial Intelligence Solutions",
      color: "#7ACFFF",
      img: "/assets/background/prod/bg_Solutions.png",
    },
    {
      title: "Business Process Management Solutions",
      color: "#ECEBE6",
      img: "/assets/background/prod/bg_bussiness.png",
    },
    {
      title: "Blockchain Solutions",
      color: "#AADFDF",
      img: "/assets/background/prod/bg_blockchain.png",
    },
    {
      title: "IOT Development",
      color: "#CCBBA1",
      img: "/assets/background/prod/bg_IOT.png",
    },
    {
      title: "Software Development",
      color: "#74E2C8",
      img: "/assets/background/prod/bg_development.png",
    },
    {
      title: "Mini App Development",
      color: "#7ACFFF",
      img: "/assets/background/prod/bg_miniapp.png",
    },
  ]);
  const renderViewProd = () => {
    return (
      <Box
        className="hide-scroll"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          borderRadius: "10px",
          py: "5vh",
          gap: "25px",
          overflow: "hidden",
        }}
      >
        <Marquee className="hide-scroll" speed={170}>
          {data.map((item, index) => {
            return (
              <Box
                className="hide-scroll"
                key={index}
                sx={{
                  width: {
                    xs: "80vw",
                    md: "25vw",
                    lg: "25vw",
                  },
                  minWidth: {
                    xs: "80vw",
                    md: "25vw",
                    lg: "25vw",
                  },
                  mr: "20px",
                  height: "70vh",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  backgroundColor: item?.color ?? "",
                  borderRadius: "10px",
                  p: "10px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                    img: {
                      ml: "25%",
                      width: "65%",
                      minWidth: "65%",
                      height: "auto",
                      transform: "translateY(-42px)",
                    },
                    span: {
                      transform: "translateY(-42px)",
                    },
                  },
                  img: {
                    ml: "25%",
                    width: {
                      xs: "75%",
                      md: "60%",
                      lg: "65%",
                    },
                    minWidth: {
                      xs: "75%",
                      md: "60%",
                      lg: "65%",
                    },
                    height: "auto",
                    transition: "transform 0.3s ease-in-out",
                  },
                  span: {
                    font: "Poppins",
                    transition: "transform 0.3s ease-in-out",
                    fontSize: {
                      xs: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: 800,
                    textAlign: {
                      xs: "center",
                      md: "left",
                      lg: "left",
                    },
                    color: "#363636",
                    letterSpacing: 1,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
              >
                <Box />
                <img src={item?.img ?? ""} alt="img_des" />
                <span>{item?.title ?? ""}</span>
              </Box>
            );
          })}
        </Marquee>
      </Box>
    );
  };
  return (
    <section id={"Product"}>
      <Fragment>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0267FD",
            height: "100vh",
            py: "2vh",
            alignItems: "flex-start",
            pl: {
              xs: "2%",
              md: "10%",
              lg: "15%",
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
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              span: {
                font: "Poppins",
                mx: "10px",
                fontSize: {
                  xs: "18px",
                  md: "24px",
                  lg: "28px",
                },
                fontWeight: 500,
              },
            }}
          >
            {"/ Our Product"}
          </Typography>
          {renderViewProd()}
        </Box>
      </Fragment>
    </section>
  );
}
