import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/products/bearing',
        destination: '/:locale/products/bearing-lubrication',
        permanent: true,
      },
      {
        source: '/:locale/products/oil-purifier',
        destination: '/:locale/products/bearing-lubrication',
        permanent: true,
      },
      {
        source: '/:locale/products/cylinder-liner',
        destination: '/:locale/products/compressor',
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);
