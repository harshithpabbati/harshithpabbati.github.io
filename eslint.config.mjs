import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const config = [
  { ignores: ["dist/**", ".vinext/**", "next-env.d.ts"] },
  ...(nextConfig && Array.isArray(nextConfig) ? nextConfig : nextConfig ? [nextConfig] : []),
  prettierConfig,
];

export default config;
