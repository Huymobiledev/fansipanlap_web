"use client"; // Ensures this runs only on the client-side

import { Box, Stack } from "@mui/material";
import { Fragment, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import gsap from "gsap";
import { motion } from "framer-motion";
import Header from "@/components/header/header";

const Welcome = () => {
  const des =
    "Fansipan Labs is a trusted technology partner specializing in AI, Blockchain, IoT, Software Development and Enterprise Solutions for businesses. We support from the ideation and strategic consulting stages through to implementation and optimization, ensuring each project is well-prepared for sustainable growth.";
  const title1 = useRef<HTMLDivElement>(null);
  const title2 = useRef<HTMLDivElement>(null);
  const titledesc = useRef<HTMLDivElement>(null);
  const btnProfile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      title1.current === null ||
      title2.current === null ||
      titledesc.current === null
    )
      return;
    const tl = gsap.timeline();
    // tl.fromTo(
    //   title1.current,
    //   { opacity: 0, y: 50 },
    //   { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    // )
    //   .fromTo(
    //     title2.current,
    //     { opacity: 0, y: 50 },
    //     { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    //   )
    //   .fromTo(
    //     titledesc.current,
    //     { opacity: 0, y: 50 },
    //     { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    //   )
    //   .fromTo(
    //     btnProfile.current,
    //     { opacity: 0, y: 50 },
    //     { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    //   );
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        background: `url(/assets/background/bg.png) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Header />
      <Stack
        sx={{
          width: "100vw",
          display: "flex",
          height: "100vh",
          px: {
            xs: "2%",
            md: "10%",
            lg: "15%",
          },
          alignItems: {
            xs: "center",
            md: "flex-start",
            lg: "flex-start",
          },
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Typography
            ref={title1}
            sx={{
              font: "Poppins",
              fontSize: {
                xs: "32px",
                md: "48px",
                lg: "64px",
              },
              fontWeight: 800,
              textAlign: {
                xs: "center",
                md: "left",
                lg: "left",
              },
              color: "#363636",
              letterSpacing: 2,
              textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
              whiteSpace: "pre-line",
            }}
          >
            {"Elevating Innovation,\nEmpowering Future".toUpperCase()}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Typography
            ref={title2}
            sx={{
              font: "Poppins",
              fontSize: {
                xs: "18px",
                md: "22px",
                lg: "32px",
              },
              fontWeight: 800,
              textAlign: {
                xs: "center",
                md: "left",
                lg: "left",
              },
              color: "#0267FD",
              letterSpacing: 1,
              whiteSpace: "pre-line",
              display: "flex",
              flexDirection: "column",
              mt: {
                xs: 2,
                md: 3,
                lg: 4,
              },
              span: {
                color: "#363636",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                  lg: "24px",
                },
                fontWeight: 500,
                textAlign: {
                  xs: "center",
                  md: "left",
                  lg: "left",
                },
                whiteSpace: "pre-line",
              },
            }}
          >
            {"About Us"}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span ref={titledesc}>{des}</span>
            </motion.div>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Box
            ref={btnProfile}
            sx={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
                lg: "flex-start",
              },
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button
              sx={{
                color: "white",
                borderRadius: "59px",
                padding: "0px 30px",
                backgroundColor: "#0267FD",
                height: {
                  xs: "40px",
                  md: "50px",
                  lg: "60px",
                },
                fontSize: {
                  xs: "14px",
                  md: "18px",
                  lg: "24px",
                },
                fontWeight: 600,
                gap: "10px",
                whiteSpace: "nowrap",
                display: "flex",
                textTransform: "none",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#0267FD",
                },
                "& .MuiButton-endIcon": {
                  margin: 0,
                },
                boxShadow: "0px 5px 10px 0px #FFFFFF33 inset",
                "&:active": {
                  boxShadow: "0px 1px 1px 0px #FFFFFF80 inset",
                },
                "&:focus": {
                  boxShadow: "0px 5px 5px 0px #0000001A",
                },
              }}
              onClick={() => {
                window.open("https://deck.fansipanlabs.com");
              }}
            >
              Company Profile
            </Button>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
};
export default Welcome;
