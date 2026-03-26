import type { Config } from 'tailwindcss';
import { spaceUiPreset } from '@spaceui/tokens';

export default {
  presets: [spaceUiPreset],
  content: [
    './packages/**/*.{ts,tsx}',
    './examples/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
