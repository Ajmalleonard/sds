import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: [
    '@square-experience/primitives',
    '@square-experience/tokens',
    '@square-experience/ai',
    '@square-experience/forms',
    '@square-experience/explorer',
  ],
};

export default config;
