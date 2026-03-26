const alpha = (variableName: string) => `hsla(var(${variableName}), <alpha-value>)`;

export const colors = {
  accent: {
    DEFAULT: alpha('--color-accent'),
    faint: alpha('--color-accent-faint'),
    deep: alpha('--color-accent-deep'),
  },

  ink: {
    DEFAULT: alpha('--color-ink'),
    dull: alpha('--color-ink-dull'),
    faint: alpha('--color-ink-faint'),
  },

  app: {
    DEFAULT: alpha('--color-app'),
    box: alpha('--color-app-box'),
    darkBox: alpha('--color-app-dark-box'),
    darkerBox: alpha('--color-app-darker-box'),
    lightBox: alpha('--color-app-light-box'),
    overlay: alpha('--color-app-overlay'),
    input: alpha('--color-app-input'),
    focus: alpha('--color-app-focus'),
    line: alpha('--color-app-line'),
    divider: alpha('--color-app-divider'),
    button: alpha('--color-app-button'),
    selected: alpha('--color-app-selected'),
    selectedItem: alpha('--color-app-selected-item'),
    hover: alpha('--color-app-hover'),
    active: alpha('--color-app-active'),
    shade: alpha('--color-app-shade'),
    frame: alpha('--color-app-frame'),
    slider: alpha('--color-app-slider'),
    explorerScrollbar: alpha('--color-app-explorer-scrollbar'),
  },

  sidebar: {
    DEFAULT: alpha('--color-sidebar'),
    box: alpha('--color-sidebar-box'),
    line: alpha('--color-sidebar-line'),
    ink: alpha('--color-sidebar-ink'),
    inkDull: alpha('--color-sidebar-ink-dull'),
    inkFaint: alpha('--color-sidebar-ink-faint'),
    divider: alpha('--color-sidebar-divider'),
    button: alpha('--color-sidebar-button'),
    selected: alpha('--color-sidebar-selected'),
    shade: alpha('--color-sidebar-shade'),
  },

  menu: {
    DEFAULT: alpha('--color-menu'),
    line: alpha('--color-menu-line'),
    hover: alpha('--color-menu-hover'),
    selected: alpha('--color-menu-selected'),
    shade: alpha('--color-menu-shade'),
    ink: alpha('--color-menu-ink'),
    faint: alpha('--color-menu-faint'),
  },

  status: {
    success: alpha('--color-status-success'),
    warning: alpha('--color-status-warning'),
    error: alpha('--color-status-error'),
    info: alpha('--color-status-info'),
  },
} as const;

export type Colors = typeof colors;
