import type { Config } from 'tailwindcss';
import { colors } from './colors';

export const spaceUiPreset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: colors.accent,
        ink: colors.ink,
        app: colors.app,
        sidebar: colors.sidebar,
        menu: colors.menu,
        status: colors.status,
      },
      borderRadius: {
        'window': '10px',
        'lg': '8px',
        'md': '6px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};

export { colors };
