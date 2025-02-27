/* eslint-disable @next/next/no-img-element */

import { Grid, Stack, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Box, keyframes } from "@mui/system";
import { motion } from "framer-motion";
// Define the up and down movement animation
const moveUpDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
const EcosystemContent: {
  img: string;
  url: string;
}[] = [
  {
    img: "/assets/images/bg_game_kara.png",
    url: "https://t.me/SingSing_TG_bott",
  },
  {
    img: "/assets/images/bg_ss.png",
    url: "https://app.singsing.net",
  },
  {
    img: "/assets/images/bg_game_garden.png",
    url: "https://t.me/mystic_garden_bot",
  },
];
export default function Ecosystem(props: any) {
  const cardImage = ({
    item,
    index,
  }: {
    item: { img: string; url: string };
    index: number;
  }) => {
    return (
      <Tilt
        // options={{
        //     max: 45,
        //     scale: 1,
        //     speed: 450,
        // }}
        className="w-[100%]"
      >
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "column",
            width: {
              xs: "72vw",
              md: "200px",
              lg: "300px",
              xl: "300px",
            },
            height: {
              xs: "auto",
              md: "450px",
              lg: "550px",
              xl: "550px",
            },
          }}
        >
          <Stack
            sx={{
              borderRadius: "23px",
              alignItems: "center",
              flexDirection: "column",
              animation: `${moveUpDownAnimation} 2.5s infinite ease-in-out`, // Combine both animations
              width: "100%",
              height: "100%",
              p: 0.4,
              img: {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <img src={item?.img} alt={item?.img} />
          </Stack>
        </Stack>
      </Tilt>
    );
  };
  return (
    <Stack
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          sx={{
            mt: "50px",
            font: "Poppins",
            fontSize: {
              xs: "22px",
              md: "28px",
              lg: "32px",
            },
            fontWeight: 700,
            textAlign: {
              xs: "center",
              md: "center",
              lg: "center",
            },
            color: "black",
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
            lineHeight: 1,
          }}
        >
          {"Our product".toUpperCase()}
        </Typography>
        <Typography
          sx={{
            font: "Poppins",
            fontSize: {
              xs: "14px",
              md: "16px",
              lg: "18px",
            },
            fontWeight: 500,
            textAlign: {
              xs: "center",
              md: "center",
              lg: "center",
            },
            color: "#343434",
            letterSpacing: 1,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
            lineHeight: 1.2,
            mt: "10px",
          }}
        >
          {
            "Empower your project with a comprehensive blockchain infrastructure\nthat accelerates growth, enhances engagement, and unlocks new revenue streams."
          }
        </Typography>
      </motion.div>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        {EcosystemContent.map((item, index) => {
          return (
            <Grid
              onClick={() => {
                window.open(item?.url, "_blank");
              }}
              key={index}
              item
              xs={12} // 1 column on extra small screens (mobile)
              sm={12} // 1 column on small screens (tablets)
              md={2} // 3 columns on medium screens
              lg={2} // 3 columns on large screens
              xl={2} // 3 columns on extra-large screens
              sx={{
                objectFit: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                my: 2,
              }}
            >
              {cardImage({ index: index, item: item })}
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
