/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
const data = [
  {
    title: "Mission",
    des: "To provide innovative software solutions and reliable outsourcing services powered by AI, Blockchain,  IoT, and software development advancements, enabling businesses to scale, optimize operations, and achieve their digital transformation goals efficiently.",
    img: "/assets/icons/mission/ic_mission.png",
  },
  {
    title: "Vision",
    des: "To be the trusted global partner for cutting-edge technology solutions and outsourcing, driving innovation and shaping the future of intelligent and decentralized digital ecosystems.",
    img: "/assets/icons/mission/ic_vision.png",
  },
  {
    title: "Value",
    des: "We harness breakthrough technologies like AI, Blockchain, and IoT to help businesses streamline operations, reduce resource reliance, and achieve smarter outcomes. With expert innovation, we empower sustainable growth and prepare businesses for a tech-driven future.",
    img: "/assets/icons/mission/ic_value.png",
  },
];

export default function MissionVision(props: any) {
  const refBox = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 2500); // Auto scroll every 4s

    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    if (refBox.current) {
      refBox.current.scrollTo({
        top: currentIndex * refBox.current.clientHeight, // Chỉ cuộn trong container con
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const renderViewMission = () => {
    return (
      <Box
        ref={refBox}
        className="hide-scroll"
        sx={{
          background: `url(/assets/background/bg_mission.png) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          mt: "2vh",
          height: {
            xs: "80vh",
            md: "80vh",
            lg: "90vh",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          borderRadius: "10px",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                scrollSnapAlign: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                minHeight: "100%",
                minWidth: "100%",
                img: {
                  width: {
                    xs: "60%",
                    md: "25%",
                    lg: "25%",
                  },
                  height: "auto",
                },
              }}
            >
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                src={item?.img ?? ""}
                alt="img_des"
              ></motion.img>
              <Typography
                sx={{
                  font: "Poppins",
                  fontSize: {
                    xs: "20px",
                    md: "28px",
                    lg: "32px",
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  span: {
                    width: "80%",
                    font: "Inter",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "20px",
                    },
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#363636",
                    letterSpacing: 0.5,
                  },
                }}
              >
                <motion.text
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  {item?.title ?? ""}
                </motion.text>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  {item?.des ?? ""}
                </motion.span>
              </Typography>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <section id={"Services"}>
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
            position: "relative",
            px: {
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
            {"/ Mission"}
            <span>{"And"}</span>
            {"Vision"}
          </Typography>
          {renderViewMission()}
        </Box>
      </Fragment>
    </section>
  );
}
