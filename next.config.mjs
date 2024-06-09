import { Time } from '@sapphire/duration';
import withNextTranslate from 'next-translate-plugin';

/**
 * @type {import('next').NextConfig}
 */
const mainConfig = {
  cleanDistDir: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    minimumCacheTTL: Time.Hour * 12,
    remotePatterns: [
      {
        hostname: 'grupoplatino.blob.core.windows.net',
        protocol: 'https',
      },
    ]
  },
  poweredByHeader: false,
  swcMinify: true,
};

// Add next-translate config to main config
const nextConfig = withNextTranslate(mainConfig);

// Remove unwanted i18n config
nextConfig.i18n = undefined;

// Export next config
export default nextConfig;
