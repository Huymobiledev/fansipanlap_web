import * as React from 'react';
import type { AppProps } from 'next/app';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import '@/styles/globals.css';
import "@/styles/nprogress.css";

import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

// ** Loader Import
import { useRouter } from 'next/router';

import { PersistGate } from 'redux-persist/integration/react'

// import i18n (needs to be bundled ;)) 
import '../../i18n';

import { Suspense, useEffect } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import configureStore, { persistor } from '@/hooks/store';
import Header from '@/components/header/header';

import lightThemeOptions from '@/styles/theme/lightThemeOptions';
import Footer from '@/components/footer/footer';
import { AppConfigGuard } from '@/components/appGuard/appConfigGuard';
//import i18n from '../../i18n';

require('dotenv').config();

NProgress.configure({ showSpinner: false })

const lightTheme = createTheme(lightThemeOptions)

interface SeoInterface {
	title: string,
	description: string,
	image: string
}


const MyApp = ({ Component, pageProps }: AppProps) => {


	const router = useRouter()
	//console.log('pageProps', process.env?.NEXT_PUBLIC_DOMAIN)

	const seoData: { [lang: string]: SeoInterface } = {
		'en': {
			title: 'CARBON CREDIT EXCHANGE JOINT STOCK COMPANY',
			description: 'We pioneer carbon reduction in asean with our internationally accredited web 3.0 carbon trading platform while offering comprehensive technology and equipment solutions to help businesses and their supply chains reduce carbon emissions and trade in the international carbon credit markets. Our streamlined platform simplifies project registration and carbon credit issuance, combined with expert consultation to maximize carbon credit potential and ensure transparent tracking of the buy/sell process, contributing to verifiable sustainability projects and supply chains.',
			image: 'https://web-dev.carbonasean.net/assets/images/cctpa.png'
		},
		'vi': {
			title: 'CÔNG TY CỔ PHẦN SÀN GIAO DỊCH TÍN CHỈ CARBON ASEAN',
			description: 'CCTPA tư vấn các giải pháp cụ thể cho các doanh nghiệp, tổ chức, cá nhân cách thức xây dựng dự án tín chỉ carbon',
			image: 'https://web-dev.carbonasean.net/assets/images/cctpa.png'
		}

	}

	useEffect(() => {

		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());

	}, []);

	return (
		<Suspense fallback={''}>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no" />
				<title>{pageProps?.title || seoData[`${router.locale}` || 'en']?.title}</title>
				<meta name="description" content={pageProps?.description || seoData[`${router.locale}` || 'en']?.description} />
				<meta property="og:title" content={pageProps?.title || seoData[`${router.locale}` || 'en']?.title} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://app.carbonasean.net" />
				<meta property="og:image" content={pageProps?.image || seoData[`${router.locale}` || 'en']?.image} />
				<meta property="og:description" content={pageProps?.description || seoData[`${router.locale}` || 'en']?.description} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/png" />
				<meta name="twitter:card" content="CCTPA" />
				<meta name="twitter:site" content="CCTPA" />
				<meta name="twitter:creator" content="@CCTPA. LTD." />
				<meta name="twitter:title" content={pageProps?.title || seoData[`${router.locale}` || 'en']?.title} />
				<meta name="twitter:description" content={pageProps?.description || seoData[`${router.locale}` || 'en']?.description} />
				<meta name="twitter:image" content={pageProps?.image || seoData[`${router.locale}` || 'en']?.image} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<CookiesProvider>
				<Provider store={configureStore}>
					<PersistGate loading={null} persistor={persistor}>
						<SnackbarProvider
							maxSnack={3}
							autoHideDuration={2000}
						>
							<ThemeProvider theme={lightTheme}>

								<CssBaseline />
								<AppConfigGuard>
									{/* Header */}
									<Header />
									<Box
										sx={{
											position: 'relative',
											width: '100%',
											minHeight: '100vh',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'flex-start',
											alignItems: 'center',
											mb: 3,
										}}
									>
										<Component {...pageProps} />
									</Box>

									<Footer />
								</AppConfigGuard>
							</ThemeProvider>
						</SnackbarProvider>
					</PersistGate>
				</Provider>
			</CookiesProvider>
		</Suspense>
	);
};

export default MyApp