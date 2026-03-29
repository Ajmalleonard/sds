import type { Preview } from '@storybook/react';
import '@square-experience/tokens/theme';
import '@square-experience/tokens/css';
import '@square-experience/tokens/css/themes/dark';
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f0f13' },
        { name: 'light', value: '#fafafa' },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
          { value: 'midnight', title: 'Midnight' },
          { value: 'noir', title: 'Noir' },
          { value: 'nord', title: 'Nord' },
          { value: 'slate', title: 'Slate' },
          { value: 'mocha', title: 'Mocha' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';
      document.documentElement.classList.remove(
        'dark', 'light', 'midnight', 'noir', 'nord', 'slate', 'mocha'
      );
      document.documentElement.classList.add(theme);
      return Story();
    },
  ],
};

export default preview;
