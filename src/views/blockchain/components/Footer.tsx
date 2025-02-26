import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FooterBlockchain() {
  const des =
    "Thank you for taking the time to learn about our Blockchain Solution. If you have any questions or are interested in getting involved, please don't hesitate to contact us. Together, let's build the future of digital interaction.";

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
        width: "100vw",
        backgroundColor: "#0267FD",
        mt: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: "50px",
        "& #imgFotter": {
          width: "150px",
          height: "auto",
          mixBlendMode: "soft-light",
        },
      }}
    >
      <img id={"imgFotter"} src={`/assets/background/bg_footer.png`} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          sx={{
            font: "Poppins",
            fontSize: {
              xs: "22px",
              md: "24px",
              lg: "32px",
            },
            fontWeight: 600,
            textAlign: "center",
            color: "white",
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
            lineHeight: 1,
          }}
        >
          {"Thank you AND\ncontact Us".toUpperCase()}
        </Typography>
      </motion.div>
      <Box
        sx={{
          mt: "50px",
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          "& #span_des": {
            color: "white",
            fontSize: {
              xs: "10px",
              md: "12px",
              lg: "14px",
            },
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
          },
        }}
      >
        <span id={"span_des"}>{displayedText}</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs:'column',
            md:"row",
            lg:"row"
          },
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap:'20px',
          mt:'50px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            justifyContent: "left",
            gap: "5px",
            alignItems: "center",
            display: "flex",
            objectFit: "cover",
            color: "white",
            fontSize: {
              xs: "12px",
              md: "12px",
              lg: "14px",
            },
          }}
        >
          Fansipan Labs CO., LTD
        </Typography>
        <Typography
          variant="body2"
          sx={{
            justifyContent: "left",
            gap: "5px",
            alignItems: "center",
            display: "flex",
            objectFit: "cover",
            color: "white",
            fontSize: {
              xs: "12px",
              md: "12px",
              lg: "14px",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.51212 15H8.1719C8.05949 14.0524 8 13.0445 8 12C8 10.9555 8.05949 9.94765 8.1719 9H3.51212C3.18046 9.93834 3 10.9481 3 12C3 13.0519 3.18046 14.0617 3.51212 15ZM3.93552 16C5.1259 18.3953 7.35208 20.1851 10.028 20.7833C9.24889 19.7228 8.65216 18.0371 8.31375 16H3.93552ZM20.4879 15C20.8195 14.0617 21 13.0519 21 12C21 10.9481 20.8195 9.93834 20.4879 9H15.8281C15.9405 9.94765 16 10.9555 16 12C16 13.0445 15.9405 14.0524 15.8281 15H20.4879ZM20.0645 16H15.6862C15.3478 18.0371 14.7511 19.7228 13.972 20.7833C16.6479 20.1851 18.8741 18.3953 20.0645 16ZM9.1844 15H14.8156C14.934 14.0624 15 13.0528 15 12C15 10.9472 14.934 9.93761 14.8156 9H9.1844C9.06598 9.93761 9 10.9472 9 12C9 13.0528 9.06598 14.0624 9.1844 15ZM9.33498 16C9.85717 18.9678 10.9181 21 12 21C13.0819 21 14.1428 18.9678 14.665 16H9.33498ZM3.93552 8H8.31375C8.65216 5.96286 9.24889 4.27722 10.028 3.21671C7.35208 3.81488 5.1259 5.60466 3.93552 8ZM20.0645 8C18.8741 5.60466 16.6479 3.81488 13.972 3.21671C14.7511 4.27722 15.3478 5.96286 15.6862 8H20.0645ZM9.33498 8H14.665C14.1428 5.03217 13.0819 3 12 3C10.9181 3 9.85717 5.03217 9.33498 8ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
              fill="white"
            />
          </svg>
          <a href="https://app-dev.singsing.net/vi"> www.fansipanlabs.com</a>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            justifyContent: "left",
            gap: "5px",
            alignItems: "center",
            display: "flex",
            objectFit: "cover",
            color: "white",
            fontSize: {
              xs: "12px",
              md: "12px",
              lg: "14px",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 8L14.618 11.2103C13.176 12.2632 10.81 12.2632 9.368 11.2103L5 8"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          contact@fansipanlabs.com
        </Typography>
      </Box>
    </Box>
  );
}
