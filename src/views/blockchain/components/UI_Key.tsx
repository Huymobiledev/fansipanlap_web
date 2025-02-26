import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function UIKey() {
  const data = [
    {
      key: "Multi-Chain Compatibility",
      des: "Supports major EVM-based chains.",
    },
    {
      key: "Smart Contract Security",
      des: "Audited and tamper-proof smart contracts.",
    },
    {
      key: "Seamless Wallet Integration",
      des: "Compatible with Metamask, Trust Wallet, and more.",
    },
    {
      key: "Customizable UI/UX",
      des: "Tailored front-end to match your brand.",
    },
    {
      key: "Scalable Architecture",
      des: "Handles high transaction volumes efficiently.",
    },
  ];
  const dataRecommended = [
    {
      key: "NFT marketplace",
      img: "/assets/background/nft_market.png",
    },
    {
      key: "Staking soulutions",
      img: "/assets/background/stacking_solutions.png",
    },
    {
      key: "Token sales platform",
      img: "/assets/background/token_platform.png",
    },
  ];
  const KeyService = () => {
    return (
      <Box
        sx={{
          width: "100%",
          background: `url(/assets/background/bg_key_service.png) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          py: "50px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Typography
            sx={{
              color: "#343434",
              my: "50px",
              fontSize: {
                xs: "12px",
                md: "14px",
                lg: "16px",
              },
              fontWeight: 700,
              font: "Poppins",
              textAlign: "center",
              letterSpacing: 2,
              textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
              whiteSpace: "pre-line",
            }}
          >
            {"Key Services".toUpperCase()}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              justifyContent: "center",
              alignItems: "center",
              mt: "20px",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              "NFT marketplace",
              "Staking soulutions",
              "Token sales platform",
            ].map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor:'pointer',
                    py: "10px",
                    px: "20px",
                    borderRadius: "21px",
                    background: "#0267FD",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: 1,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                  }}
                >
                  {`${item} ➤`}
                </Box>
              );
            })}
          </Box>
        </motion.div>
      </Box>
    );
  };
  const KeyTechnology = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
          gap: "20px",
          img: {
            width: {
              xs: "80%",
              md: "30%",
              lg: "30%",
            },
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            cursor:'pointer',
            height: "auto",
          },
        }}
      >
        <img src={`/assets/background/bg_key_tech.png`} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
     
            alignItems: {
              xs: "center",
              md: "flex-start",
              lg: "flex-start",
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    mt: "10px",
                    color: "#343434",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "20px",
                    },
                    fontWeight: 600,
                    font: "Poppins",
                    textAlign: {
                      xs: "center",
                      md: "left",
                      lg: "left",
                    },
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor:'pointer',
                  }}
                >
                  {item.key}
                </Typography>
                <Typography
                  sx={{
                    color: "#343434",
                    fontSize: {
                      xs: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    fontWeight: 500,
                    font: "Poppins",
                    textAlign: {
                      xs: "center",
                      md: "left",
                      lg: "left",
                    },
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor:'pointer',
                  }}
                >
                  {item.des}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  };
  const RecommendedSolutions = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          py: "50px",
          width: "100%",
          background: "#F5F9FF",
        }}
      >
        <Typography
          sx={{
            color: "#343434",
            fontSize: {
              xs: "12px",
              md: "14px",
              lg: "16px",
            },
            fontWeight: 700,
            font: "Poppins",
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
          {"Recommended solutions".toUpperCase()}
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              mt: "50px",
            }}
          >
            {dataRecommended.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    img: {
                      width: "20%",
                      height: "auto",
                    },
                    color: "#343434",
                    fontSize: {
                      xs: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    fontWeight: 700,
                    font: "Poppins",
                    textAlign: {
                      xs: "center",
                      md: "left",
                      lg: "left",
                    },
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor:'pointer',
                  }}
                >
                  <img src={item.img} />
                  {item.key}
                </Box>
              );
            })}
          </Box>
        </motion.div>
      </Box>
    );
  };
  return (
    <Stack
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "50px",
      }}
    >
      {KeyService()}
      <Typography
        sx={{
          color: "#343434",
          my: "50px",
          fontSize: {
            xs: "12px",
            md: "14px",
            lg: "16px",
          },
          fontWeight: 700,
          font: "Poppins",
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
        {"Key technology".toUpperCase()}
      </Typography>
      {KeyTechnology()}
      {RecommendedSolutions()}
    </Stack>
  );
}
