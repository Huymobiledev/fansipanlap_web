import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment, useEffect, useState } from "react";
import Nav from "./components/nav";
import router from "next/router";
import { checkUrl } from "@/utils";
import Link from "next/link";
import { useShowMediaUp } from "@/hooks/useResponse";
import LanguageItem from "../footer/languageItem";
import { MenuIcon } from "../icons/icons";
import MenuMobile from "./components/menuMobile";
// import { useSpring, animated } from 'react-spring';

export const noHeaderUrl = ["/login*", "/forget-password*"];

const CustomOutlinedButton = styled(Button)({
  border: "1px solid inherit",
  borderRadius: "59px",
  height: "30px",
  color: "inherit",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "inherit",
    border: "1px solid inherit",
  },
});

export default function Header() {
  const [isBg, setIsBg] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  const [isOnMobile, setIsOnMobile] = useState<boolean>(false);
  useEffect(() => {
    setIsOnMobile(window.innerWidth > 770 ? false : true);
  });

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const darkUrl = [
    "/new*",
    // '/service*',
    //'/about-us*'
  ];

  const isDark = checkUrl(router.pathname, darkUrl);

  useEffect(() => {
    function checkScroll() {
      //console.log(window.scrollY)
      if (window.scrollY >= 10) {
        setIsBg(true);
      }
      if (window.scrollY === 0) {
        setIsBg(false);
      }
    }
    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  if (checkUrl(router.pathname, noHeaderUrl)) {
    return <></>;
  }

  return (
    <Fragment>
      <Box
        sx={{
          background: "white",
          //backdropFilter: 'blur(5px)',
          position: "absolute",
          zIndex: 1000,
          top: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: 45,
          pl: 0,
        }}
      >
        <Box
          sx={{
            "@media screen and (min-width: 800px)": {
              width: "10vw",
            },
          }}
        ></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="right"
          width="100%"
          sx={{
            height: [60, 60, 60, 60, 60],
            minHeight: [60, 60, 60, 60, 60],
            color: isDark ? "#000" : "#fff",
            width: "100%",
            pl: 0,
          }}
        >
          <Stack
            direction="row"
            alignItems="right"
            height="100%"
            sx={{ pl: 0 }}
          >
            <Box
              sx={{
                height: [30],
                minHeight: [30],
                img: {
                  width: "90%",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  top: "50%",
                },
                textAlign: "center",
                justifyItems: "left",
                ml: 0,
              }}
            >
              <Link href="/">
                <img
                  src={
                    isDark
                      ? "/assets/icons/logo-dark.png"
                      : "/assets/icons/logo.png"
                  }
                  alt="logo"
                />
              </Link>
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyItems={"space-between"}
            height="100%"
            sx={{
              mr: 0,
            }}
          >
            <Nav isDark={isDark} />
            <Box
              sx={{
                display: isBg ? "flex" : "none",
                position: "fixed",
                background: "white",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                textAlign: "center",
                justifyContent: "center",
                bottom: 10,
                right: 10,
                ":hover": {
                  background: "white",
                },
                img: {
                  width: 16,
                  height: 11,
                  m: "auto",
                },
              }}
              onClick={scrollToTop}
            >
              <img src="/assets/icons/Polygon_1.svg"></img>
            </Box>
            <IconButton
              sx={{
                display: {
                  xs: "auto",
                  md: "none",
                },
                color: "inherit",
              }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon />
            </IconButton>
            {/* <LanguageItem isDark={isDark} /> */}
          </Stack>
        </Stack>
        <Box
          sx={{
            "@media screen and (min-width: 800px)": {
              width: "10vw",
            },
          }}
        ></Box>
      </Box>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        sx={{
          ".MuiPaper-root": {
            p: 3,
            px: 1.5,
            width: "50vw",
            maxWidth: "200px",
            zIndex: 999,
            backgroundColor: "#0267FD",
          },
        }}
      >
        <MenuMobile onClose={() => setOpenMenu(false)} />
      </Drawer>
    </Fragment>
  );
}
