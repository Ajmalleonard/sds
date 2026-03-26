// Semantic color definitions - bare HSL values for Tailwind alpha support
// Format: "H, S%, L%" (not wrapped in hsl())

export const colors = {
  // Accent colors
  accent: {
    DEFAULT: '200, 100%, 60%',
    faint: '200, 100%, 90%',
    deep: '200, 100%, 40%',
  },

  // Text colors (ink)
  ink: {
    DEFAULT: '0, 0%, 100%',
    dull: '0, 0%, 70%',
    faint: '0, 0%, 50%',
  },

  // App background/surface colors
  app: {
    DEFAULT: '235, 15%, 7%',
    box: '235, 15%, 12%',
    line: '235, 15%, 20%',
    hover: '235, 15%, 15%',
    selected: '235, 15%, 18%',
  },

  // Sidebar colors
  sidebar: {
    DEFAULT: '235, 15%, 7%',
    box: '235, 15%, 10%',
    line: '235, 15%, 18%',
    ink: '0, 0%, 100%',
    inkDull: '0, 0%, 70%',
    selected: '235, 15%, 15%',
    hover: '235, 15%, 12%',
  },

  // Menu/dropdown colors
  menu: {
    DEFAULT: '235, 15%, 10%',
    line: '235, 15%, 18%',
    hover: '235, 15%, 15%',
    ink: '0, 0%, 100%',
  },

  // Status colors
  status: {
    success: '142, 76%, 36%',
    warning: '38, 92%, 50%',
    error: '0, 84%, 60%',
    info: '200, 100%, 60%',
  },
} as const;

export type Colors = typeof colors;
