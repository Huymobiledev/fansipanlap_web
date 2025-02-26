import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeBlockchain() {
  const des = "Welcome to the future of digital interaction!";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < des.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + des[index]);
        setIndex((prev) => prev + 1);
      }, 30); // Điều chỉnh tốc độ hiển thị chữ

      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <Box
      sx={{
        width: "100%",
        background: `url(/assets/background/banner_solutions.png) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: {
          xs: "center",
          md: "flex-start",
          lg: "flex-start",
        },
        justifyContent: "center",
        flexDirection: "column",
        px: {
          xs: "2%",
          md: "5%",
          lg: "5%",
        },
        "& #span_des": {
          color: "white",
          fontSize: {
            xs: "16px",
            md: "16px",
            lg: "24px",
          },
          fontWeight: 400,
          textAlign: {
            xs: "center",
            md: "left",
            lg: "left",
          },
          letterSpacing: 2,
          textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
          whiteSpace: "pre-line",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          sx={{
            font: "Poppins",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            fontSize: {
              xs: "48px",
              md: "48px",
              lg: "64px",
            },
            fontWeight: 800,
            textAlign: {
              xs: "center",
              md: "left",
              lg: "left",
            },
            color: "white",
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
            lineHeight: 1,
          }}
        >
          {"Blockchain\nSolution".toUpperCase()}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span id={"span_des"}>{displayedText}</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          color="white"
        >
          |
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Box
          sx={{
            px: "50px",
            py: "10px",
            background: "#FFFFFF",
            boxShadow: " 0px 4px 4px 0px #00000040",
            borderRadius: "12px",
            mt: "20px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            color: "#0267FD",
            cursor: "pointer",
            fontSize: {
              xs: "14px",
              md: "16px",
              lg: "24px",
            },
            fontWeight: 700,
            textAlign: {
              xs: "center",
              md: "left",
              lg: "left",
            },
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
          }}
        >
          Start for Free
        </Box>
      </motion.div>
    </Box>
  );
}
