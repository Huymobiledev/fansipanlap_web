import * as React from "react";
import type { AppProps } from "next/app";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";

import "@/styles/globals.css";
import "@/styles/nprogress.css";

import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

// ** Loader Import
import { useRouter } from "next/router";

import { PersistGate } from "redux-persist/integration/react";

// import i18n (needs to be bundled ;))
// import '../../i18n';

import { Suspense } from "react";
import NProgress from "nprogress";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import configureStore, { persistor } from "@/hooks/store";

import lightTheme from "@/styles/theme/lightThemeOptions";
// import { AppConfigGuard } from '@/components/appGuard/appConfigGuard';
//import i18n from '../../i18n';

require("dotenv").config();

NProgress.configure({ showSpinner: false });

interface SeoInterface {
  title: string;
  description: string;
  image: string;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  //console.log('pageProps', process.env?.NEXT_PUBLIC_DOMAIN)

  const seoData: { [lang: string]: SeoInterface } = {
    en: {
      title: "FANSIPAN LABS",
      description: "Fansipan Labs is a trusted technology partner specializing in AI, Blockchain, IoT, Software Development and Enterprise Solutions for businesses. We support from the ideation and strategic consulting stages through to implementation and optimization, ensuring each project is well-prepared for sustainable growth.",
      image: "https://www.fansipanlabs.com/assets/images/thumb.png",
    },
    vi: {
      title: "FANSIPAN LABS",
      description: "Fansipan Labs is a trusted technology partner specializing in AI, Blockchain, IoT, Software Development and Enterprise Solutions for businesses. We support from the ideation and strategic consulting stages through to implementation and optimization, ensuring each project is well-prepared for sustainable growth.",
      image: "https://www.fansipanlabs.com/assets/images/thumb.png",
    },
  };

  // useEffect(() => {

  // 	router.events.on('routeChangeStart', () => NProgress.start());
  // 	router.events.on('routeChangeComplete', () => NProgress.done());
  // 	router.events.on('routeChangeError', () => NProgress.done());

  // }, []);

  return (
    <Suspense fallback={""}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no"
        />
        <title>
          {pageProps?.title || seoData[`${router.locale}` || "en"]?.title}
        </title>
        <meta
          name="description"
          content={
            pageProps?.description ||
            seoData[`${router.locale}` || "en"]?.description
          }
        />
        <meta
          property="og:title"
          content={
            pageProps?.title || seoData[`${router.locale}` || "en"]?.title
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            pageProps?.image || seoData[`${router.locale}` || "en"]?.image
          }
        />
        <meta
          property="og:description"
          content={
            pageProps?.description ||
            seoData[`${router.locale}` || "en"]?.description
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="FANSIPAN LABS" />
        <meta name="twitter:site" content="FANSIPAN LABS" />
        <meta
          name="twitter:title"
          content={
            pageProps?.title || seoData[`${router.locale}` || "en"]?.title
          }
        />
        <meta
          name="twitter:description"
          content={
            pageProps?.description ||
            seoData[`${router.locale}` || "en"]?.description
          }
        />
        <meta
          name="twitter:image"
          content={
            pageProps?.image || seoData[`${router.locale}` || "en"]?.image
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <CookiesProvider>
        <Provider store={configureStore}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                {/* <AppConfigGuard> */}
                {/* Header */}
                {/* <Header /> */}
                <Box
                  className="hide-scroll"
                  sx={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    scrollSnapType: "y mandatory",
                    scrollBehavior: "smooth",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <Component {...pageProps} />
                </Box>

                {/* <Footer /> */}
              </ThemeProvider>
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </CookiesProvider>
    </Suspense>
  );
};

export default MyApp;
