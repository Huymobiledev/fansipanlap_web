/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function OurPartner(props: any) {
  const partners = [
    "/assets/images/avax-full-avalanche-logo-01 1.png",
    "/assets/images/avax-full-avalanche-logo-01 1-1.png",
    "/assets/images/avax-full-avalanche-logo-01 1-2.png",
    "/assets/images/avax-full-avalanche-logo-01 1-3.png",
    "/assets/images/avax-full-avalanche-logo-01 1-4.png",
    "/assets/images/avax-full-avalanche-logo-01 1-5.png",
    "/assets/images/avax-full-avalanche-logo-01 1-6.png",
  ];
  const renderViewPartners = () => {
    return (
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          py: "2vh",
          alignItems: "flex-start",
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
          <span>{"Partners"}</span>
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 2,
          }}
        >
          {partners.map((item, index) => {
            return (
              <Grid
                onClick={() => {}}
                key={index}
                item
                xs={6} // 1 column on extra small screens (mobile)
                sm={6} // 1 column on small screens (tablets)
                md={4} // 3 columns on medium screens
                lg={4} // 3 columns on large screens
                xl={4} // 3 columns on extra-large screens
                sx={{
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "backInOut",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid #0267FD",
                      borderRadius: "10px",
                      width: "90%",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      py: 1,
                      m: 0.5,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                        img: {
                          transform: "translateY(-10px)",
                        },
                      },
                      img: {
                        width: {
                          xs: "30%",
                          md: "30%",
                          lg: "30%",
                        },
                        transition: "transform 0.3s ease-in-out",
                        height: "auto",
                      },
                    }}
                  >
                    <img src={item ?? ""} alt={"item"} />
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };
  const renderViewFooter = () => {
    return (
      <Box
        sx={{
          width: "100%",
          color: "white",
          height: "100%",
          backgroundColor: "#0267FD",
          justifyContent: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          pt: 8,
        }}
      >
        <Box
          sx={{
            "@media screen and (min-width: 1200px)": {
              width: "40vw",
            },
          }}
        ></Box>
        <Stack
          direction={"column"}
          gap={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "90vw",
            ".line": {
              height: { xs: "1px", lg: "90%" },
              width: { xs: "90vw", lg: "1px" },
              backgroundColor: "white",
              opacity: 0.3,
              mx: "auto",
            },
          }}
        >
          <Box
            sx={{
              mt: {
                xs: "2vh",
                md: "2vh",
                lg: "2vh",
              },
              width: "100%",
              display: "flex",
              justifyContent: "left",
              img: {
                width: {
                  xs: "60%",
                  md: "20%",
                  lg: "20%",
                },
                height: "auto",
              },
            }}
          >
            <img src="/assets/icons/logo_footer.png" alt="FANSIPAN-LAB" />
          </Box>
          <Box>
            <Grid
              container
              sx={{
                "@media screen and (min-width: 800px)": {
                  width: "90vw",
                },
                p: {
                  mb: 10,
                },
              }}
            >
              <Grid item lg={2.2} xs={12} my={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    mb: "10px",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                      lg: "24px",
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
                    fontSize: "14px",
                    alignItems: "center",
                    display: "flex",
                    objectFit: "cover",
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
                  <a href="https://app-dev.singsing.net/vi">
                    {" "}
                    www.fansipanlabs.com
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "left",
                    gap: "5px",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    objectFit: "cover",
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
              </Grid>
              <Grid item lg={0.25} xs={12} alignItems={"center"} my={1}>
                <div className="line"></div>
              </Grid>
              <Grid item lg={2.2} xs={12} my={1} sx={{}}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    left: 0,
                    mb: "10px",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                      lg: "24px",
                    },
                  }}
                >
                  Singapore
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "left",
                    display: "inline-flex",
                    gap: "5px",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                  }}
                >
                  114 Lavender street <br></br>#11-83 CT HUB 2 SINGAPORE
                </Typography>
              </Grid>
              <Grid item lg={0.25} xs={12} my={1}>
                <div className="line"></div>
              </Grid>
              <Grid item lg={2.2} xs={12} my={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    left: 0,
                    mb: "10px",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                      lg: "24px",
                    },
                  }}
                >
                  Vietnam
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "left",
                    display: "inline-flex",
                    gap: "5px",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                  }}
                >
                  219 Khanh Hoi, District 4, HCMC
                </Typography>
              </Grid>
              <Grid item lg={0.25} xs={12} my={1}>
                <div className="line"></div>
              </Grid>
              <Grid item lg={2.2} xs={12} my={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    left: 0,
                    mb: "10px",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                      lg: "24px",
                    },
                  }}
                >
                  Philippines
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "left",
                    display: "inline-flex",
                    gap: "5px",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                  }}
                >
                  Manila
                </Typography>
              </Grid>
              <Grid item lg={0.25} xs={12} my={1}>
                <div className="line"></div>
              </Grid>
              <Grid item lg={2.2} xs={12} my={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    left: 0,
                    mb: "10px",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                      lg: "24px",
                    },
                  }}
                >
                  Indonesia
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "left",
                    display: "inline-flex",
                    gap: "5px",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                  }}
                >
                  Bali
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", lg: "center" },
              fontSize: "12px",
              fontWeight: 400,
              mr: { xs: "auto", lg: 10 },
              maxWidth: "1200px",
              width: { xs: "100%" },
              lineHeight: "14.52px",
              mb: 5,
              pr: { md: "auto", lg: "none" },
            }}
          >
            <i>
              * Disclaimer: The Information Contained In This Website, Including
              The Historical Average APR, Are Intended For Informational
              Purposes Only. Some Of The Information May Be Dated And May Not
              Reflect The Most Current Information Or Interest Rates. Interest
              Rates Are Based On The Quality Of Individual Projects And Are
              Subject To Change Due To Market Conditions.
            </i>
          </Typography>
        </Stack>
      </Box>
    );
  };
  return (
    <section id={"Partners"}>
      <Fragment>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            height: {
              xs: "150vh",
              md: "100vh",
              lg: "100vh",
            },
            alignItems: "flex-start",
          }}
        >
          {renderViewPartners()}
          {renderViewFooter()}
        </Box>
      </Fragment>
    </section>
  );
}
