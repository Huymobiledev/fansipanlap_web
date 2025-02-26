"use client";

import { Stack } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./components/Welcome";
import MissionVision from "./components/Mission_Vision";
import OurProduct from "./components/Our_Product";
import OurTeam from "./components/Our_Team";
import OurAwards from "./components/Our_Award";
import OurPartner from "./components/Our_Partner";
import { motion } from "framer-motion";
import Header from "@/components/header/header";

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
  const containerRef = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState<string | null>(
    "welcome"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setCurrentSection(
            visibleSection.target.getAttribute("data-key") || null
          );
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "100vh",
          scrollBehavior: "smooth",
          transition: "transform 0.3s ease-in-out",
        }}
        ref={containerRef}
      >
        {sections.map(({ Component, key }, index) => (
          <motion.div
            key={key}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-key={key}
            initial={{ opacity: 0, y: 0, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              width: "100%",
              height: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Component />
          </motion.div>
        ))}
        <Header
          isWhite={
            currentSection == "welcome" ||
            currentSection == "ourTeam" ||
            currentSection == "ourAwards" ||
            currentSection == "ourPartner"
          }
        />
      </Stack>
    </Fragment>
  );
}
