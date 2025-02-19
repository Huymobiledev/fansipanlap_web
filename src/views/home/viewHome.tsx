"use client";

import { Stack } from "@mui/material";
import { Fragment, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
// import { getHomeContentAPI } from "@/api/home";
import Welcome from "./components/Welcome";
import MissionVision from "./components/Mission_Vision";
import OurProduct from "./components/Our_Product";
import OurTeam from "./components/Our_Team";
import OurAwards from "./components/Our_Award";
import OurPartner from "./components/Our_Partner";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const sections = [
  { Component: Welcome, key: "welcome" },
  { Component: MissionVision, key: "missionVision" },
  { Component: OurProduct, key: "ourProduct" },
  { Component: OurTeam, key: "ourTeam" },
  { Component: OurAwards, key: "ourAwards" },
  { Component: OurPartner, key: "ourPartner" },
];
export default function ViewHomePage() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <Fragment>
      <Stack
        direction={"column"}
        width={"100vw"}
        alignItems={"center"}
        sx={{
          display: "flex",
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        {sections.map(({ Component, key }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 0, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              width: "100%",
              scrollSnapAlign: "start",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Component />
          </motion.div>
        ))}
      </Stack>
    </Fragment>
  );
}
