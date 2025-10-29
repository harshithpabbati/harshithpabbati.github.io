import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const config = [
  ...(nextConfig && Array.isArray(nextConfig) ? nextConfig : nextConfig ? [nextConfig] : []),
  prettierConfig,
];

export default config;
