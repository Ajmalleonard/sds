# Square Experience

A shared design system built for business and enterprise applications.

## Overview

Square Experience is a standalone system that centralizes UI components, design tokens, and styling utilities. It’s designed to keep everything consistent across multiple apps while avoiding messy dependencies.

## Structure

```
sds/
├── packages/
│   ├── tokens/         # Design tokens + Tailwind preset
│   ├── primitives/     # Core UI components (40+)
│   ├── forms/          # react-hook-form wrappers
│   ├── ai/             # AI interaction components (18)
│   └── explorer/       # File management components (14)
├── examples/
│   └── showcase/       # Interactive demo app
├── .storybook/         # Component docs
└── scripts/            # Dev utilities
```

## Quick Start

### Install

```bash
git clone https://github.com/ajmalleonard/sds.git
cd sds

bun install
bun run build
```

### Dev

```bash
bun run dev
bun run showcase
bun run storybook
bun run watch primitives
bun run typecheck
bun run clean
```

### Local Linking

```bash
# inside square-experience
bun run link

# inside your app
bun link @square-experience/primitives @square-experience/tokens

# unlink when done
bun run unlink
```

## Usage

```ts
import { spaceUiPreset, colors } from '@square-experience/tokens';
import { Button, Card, Dialog } from '@square-experience/primitives';
import { InputField, SelectField } from '@square-experience/forms';
import { ToolCall, ChatComposer, Markdown } from '@square-experience/ai';
import { FileGrid, PathBar, Inspector } from '@square-experience/explorer';
```

### Tailwind

```ts
import { spaceUiPreset } from '@square-experience/tokens';

export default {
  presets: [spaceUiPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

### CSS

```css
@import '@square-experience/tokens/css';
```

## Packages

### tokens
Foundation layer. Defines colors, themes, and Tailwind config.

### primitives
Core UI building blocks:
- Inputs, buttons, toggles
- Dialogs, tooltips, menus
- Layout + display components

### forms
Prebuilt form components powered by react-hook-form.

### ai
UI for AI-driven workflows:
- Chat composer
- Tool calls
- Task boards
- Memory views
- Agent controls

### explorer
File system UI:
- Grid/list views
- Inspector panel
- Breadcrumbs
- Drag & drop
- Quick preview

## Workflow

### Showcase

```bash
bun run showcase
# http://localhost:19850
```

### Storybook

```bash
cd .storybook
bun install
bun run dev
# http://localhost:6006
```

### Changesets

```bash
bun run changeset
bun run version-packages
bun run publish
```

## Contributing

```bash
git checkout -b feature/your-feature

bun run build
bun run typecheck

bun run changeset
git commit -m "feat: your change"
git push
```

## Scripts

| Script | What it does |
|--------|-------------|
| build | build everything |
| dev | watch mode |
| watch | watch specific package |
| typecheck | check types |
| clean | remove build output |
| showcase | run demo |
| link | link packages |
| unlink | unlink packages |
| changeset | create release note |
| version-packages | bump versions |
| publish | publish packages |

## License

MIT © Square Experience
