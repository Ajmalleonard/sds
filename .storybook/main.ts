import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    const tailwindcss = (await import('@tailwindcss/vite')).default;

    return {
      ...config,
      plugins: [...(config.plugins || []), tailwindcss()],
      build: {
        ...config.build,
        target: 'esnext',
      },
    };
  },
};

export default config;
