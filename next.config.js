const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'false',
  })

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        domains: [
            'secure.gravatar.com',
            'lh3.googleusercontent.com',
            'ss-media-dev.s3.ap-southeast-1.amazonaws.com',
            'ss-media-stag.s3.ap-southeast-1.amazonaws.com',
            'ss-media.s3.ap-southeast-1.amazonaws.com',
            'media-dev.singsing.net',
            'media-dev.carbonasean.net',
            '*'
        ],
    },

    webpack5: true,
    experimental: {
        esmExternals: 'loose',
        scrollRestoration: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    transpilePackages: ['@mui/x-charts'],
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'en',
    }
}

module.exports = withBundleAnalyzer(nextConfig);