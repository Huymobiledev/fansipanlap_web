import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function NFTMarketPlace() {
  const data = [
    {
      key: "Benefits",
      des: "•Monetize digital assets and engage your community.\n•Enable royalties for creators and secondary sales revenue.",
    },
    {
      key: "Features",
      des: "•Fixed-price sales, auctions, and royalties.\n•Fully customizable marketplace interface.",
    },
  ];
  const data_stacking = [
    {
      key: "Benefits",
      des: "•Enhance token utility and drive long-termengagement.\n•Offer secure and flexible staking rewards.",
    },
    {
      key: "Features",
      des: "•Customizable staking pools with different lock-up periods.\n•Automatic reward distribution mechanisms.",
    },
  ];
  const data_tokens = [
    {
      key: "Benefits",
      des: "•Raise funds securely with a streamlined process.\n•Ensure compliance with AML requirements.",
    },
    {
      key: "Features",
      des: "•IDO, Private Sale, and Public Sale capabilities.\n•Investor dashboard with real-time analytics.\n•Secure smart contract execution.",
    },
  ];

  const viewNFt = () => {
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
          "& #img_item": {
            width: {
              xs: "80%",
              md: "30%",
              lg: "30%",
            },
            height: "auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            cursor: "pointer",
          },
        }}
      >
        <motion.img
          id="img_item"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          src={`/assets/background/bg_market_place.png`}
        />
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
          <Typography
            sx={{
              mt: "10px",
              color: "#343434",
              fontSize: {
                xs: "14px",
                md: "16px",
                lg: "20px",
              },
              fontWeight: 800,
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
            {"NFT marketplace"}
          </Typography>
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.des}
                </Typography>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    );
  };
  const viewStacking = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
          gap: "20px",
          "& #img_item": {
            width: {
              xs: "80%",
              md: "30%",
              lg: "30%",
            },
            height: "auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: {
              xs: "center",
              md: "flex-end",
              lg: "flex-end",
            },
          }}
        >
          <Typography
            sx={{
              mt: "10px",
              color: "#343434",
              fontSize: {
                xs: "14px",
                md: "16px",
                lg: "20px",
              },
              fontWeight: 800,
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
            {"Staking platform"}
          </Typography>
          {data_stacking.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
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
                      md: "right",
                      lg: "right",
                    },
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
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
                      md: "right",
                      lg: "right",
                    },
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
                  }}
                >
                  {item.des}
                </Typography>
              </motion.div>
            );
          })}
        </Box>
        <motion.img
          id="img_item"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          src={`/assets/background/bg_stacking.png`}
        />
      </Box>
    );
  };
  const viewTokenSales = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
          gap: "20px",
          "& #img_item": {
            width: {
              xs: "80%",
              md: "30%",
              lg: "30%",
            },
            height: "auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            cursor: "pointer",
          },
        }}
      >
        <motion.img
          id="img_item"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          src={`/assets/background/bg_token_sale.png`}
        />
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
          <Typography
            sx={{
              mt: "10px",
              color: "#343434",
              fontSize: {
                xs: "14px",
                md: "16px",
                lg: "20px",
              },
              fontWeight: 800,
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
            {"Token sales platform"}
          </Typography>
          {data_tokens.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    cursor: "pointer",
                    letterSpacing: 2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.des}
                </Typography>
              </motion.div>
            );
          })}
        </Box>
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
      {viewNFt()}
      {viewStacking()}
      {viewTokenSales()}
    </Stack>
  );
}
