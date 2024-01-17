import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        <link href="assets/js/font.css" rel="stylesheet" />

        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG || `G-3DPEDGM2E2`}`}></script>
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG || `G-3DPEDGM2E2`}');
            
            `,
          }}
        /> */}
        <link rel="stylesheet" href="assets/js/animate.min.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
