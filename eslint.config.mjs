import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const config = [
  ...(Array.isArray(nextConfig) ? nextConfig : [nextConfig]),
  prettierConfig,
];

export default config;
