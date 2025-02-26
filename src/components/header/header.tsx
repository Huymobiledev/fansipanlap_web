import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment, useEffect, useState } from "react";
import Nav from "./components/nav";
import router, { useRouter } from "next/router";
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

export default function Header({ isWhite }: { isWhite: boolean }) {
  const [isBg, setIsBg] = useState(false);
  const [isOpenSolution, setIsOpenSolution] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

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
    setIsOpenSolution(false);
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
          //backdropFilter: 'blur(5px)',
          position: "fixed",
          zIndex: 1000,
          top: 0,
          width: "100%",
          mr: "15px",
          display: "flex",
          alignItems: "center",
          height: 45,
          px: "20px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="right"
          width="100%"
          sx={{
            height: [60, 60, 60, 60, 60],
            minHeight: [60, 60, 60, 60, 60],
            color: isWhite ? "#fff" : "#0267FD",
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
                    isWhite
                      ? "/assets/icons/logo-dark.png"
                      : "/assets/icons/logo_footer.png"
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
            <Nav
              isWhite={isWhite}
              openSolution={() => {
                setIsOpenSolution(!isOpenSolution);
              }}
            />
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
                  xs: "flex",
                  md: "flex",
                  lg: "none",
                },
                color: "inherit",
                svg: {
                  color: "black",
                },
              }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon />
            </IconButton>
            {/* <LanguageItem isDark={isDark} /> */}
          </Stack>
        </Stack>
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
      {isOpenSolution && (
        <Box
          onClick={() => {
            setIsOpenSolution(false);
          }}
          sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            display:{
              xs:'none',
              md:'none',
              lg:'flex'
            }
          }}
        >
          <Box
            sx={{
              position: "fixed",
              background: "#FFFFFF",
              borderRadius: "8px",
              right: "10px",
              top: "50px",
              boxShadow: "0px 4px 4px 0px #00000040",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: "20px",
              px: "20px",
              gap: "20px",
              zIndex:'10'
            }}
          >
            {["Blockchain Solution", "Security Solution"].map((item, index) => {
              return (
                <>
                  <Typography
                    onClick={() => {
                      if (index == 0) {
                        router.push(`blockchain`);
                      }
                    }}
                    key={index}
                    sx={{
                      font: "Poppins",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textAlign: {
                        xs: "center",
                        md: "left",
                        lg: "left",
                      },
                      color: "#595959",
                      letterSpacing: 2,
                      textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                      whiteSpace: "pre-line",
                      lineHeight: 1,
                    }}
                  >
                    {item}
                  </Typography>
                  {index == 0 && (
                    <Box
                      width={"100%"}
                      sx={{
                        height: "1px",
                        backgroundColor: "#CCCCCC",
                      }}
                    />
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      )}
    </Fragment>
  );
}
