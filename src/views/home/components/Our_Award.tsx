/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

export default function OurAwards(props: any) {
  const buildText = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              md: "32px",
              lg: "54px",
            },
            mt: {
              xs: "10px",
              md: "20px",
              lg: "30px",
            },
            color: "#999999",
            fontWeight: 800,
            font: "Poppins",
            display: "flex",
            flexDirection: "column",
            letterSpacing: 1,
            alignItems: "flex-start",
            whiteSpace: "pre-line",
            lineHeight: { xs: "28px", md: "32px", lg: "54px" },
            span: {
              fontSize: {
                xs: "24px",
                md: "32px",
                lg: "54px",
              },
              color: "#0267FD",
              fontWeight: 800,
              font: "Poppins",
            },
          }}
        >
          {"We’ve been building\nmany products with scale"}
          <span>Million-User</span>
        </Typography>
      </motion.div>
    );
  };
  const renderWinnList = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          flex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              img: {
                height: "auto",
                width: "100px",
              },
            }}
          >
            <img src={`/assets/images/pngegg 1.png`} />
            <Typography
              sx={{
                color: "#595959",
                fontWeight: 600,
                fontSize: {
                  xs: "14px",
                  md: "18px",
                  lg: "24px",
                },
                font: "Poppins",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {
                "SingSing is the winner of Community-2-Blockchanin Hackathon Vietnam 202"
              }
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            height: "1px",
            width: "100%",
            background: `linear-gradient(270deg, rgba(241, 96, 36, 0) -0.09%, #F16024 49.41%, rgba(241, 96, 36, 0) 99.91%)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              img: {
                height: "auto",
                width: "100px",
              },
            }}
          >
            <img src={`/assets/images/pngegg 1.png`} />
            <Typography
              sx={{
                color: "#595959",
                fontWeight: 600,
                fontSize: {
                  xs: "14px",
                  md: "18px",
                  lg: "24px",
                },
                font: "Poppins",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {
                "2 National Cups for software development Asia-pacific ict champion cup (APICTA)"
              }
            </Typography>
          </Box>
        </motion.div>
      </Box>
    );
  };
  return (
    <section id={"Awards"}>
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
              height: "auto",
              width: "80vw",
              borderRadius: "10px",
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
            <span>{"Awards"}</span>
          </Typography>
          {buildText()}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {renderWinnList()}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                img: {
                  height: "auto",
                  width: {
                    xs: "60px",
                    md: "80px",
                    lg: "100px",
                  },
                },
                "& #img_very": {
                  height: "auto",
                  width: {
                    xs: "80px",
                    md: "100px",
                    lg: "120px",
                  },
                },
              }}
            >
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                id={"img_very"}
                src={`/assets/images/Picture9-very_compressed-scale-4_00x 1.png`}
              />
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                src={`/assets/images/apicta_award_home-89x300 1.png`}
              />
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                src={`/assets/images/apicta_award_home-89x300 1.png`}
              />
            </Box>
          </Box>
          <Box/>
        </Box>
      </Fragment>
    </section>
  );
}
