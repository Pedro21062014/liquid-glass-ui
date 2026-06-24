# 🧊 Liquid Glass Apple UI (Pro)

A high-end, production-ready React UI library that perfectly replicates Apple's "Liquid Glass" (Glassmorphism) aesthetics.

## ✨ Features

- 💎 **5 Glass Variants**: From `ultra-thin` to `chrome` (high gloss).
- 🎨 **Smart Coloring**: Presets for `white`, `black`, `blue`, `purple`, and `gold`.
- 🕹️ **Pro Buttons**: Fully interactive buttons with hover physics and optional glow.
- 📐 **Highly Flexible**: Control intensity, blur, border, and shadows.
- 🚀 **Performance**: Optimized with `useMemo` and CSS hardware acceleration.

## 📦 Installation

```bash
npm install liquid-glass-apple-ui
```

## 🚀 Quick Start

### Basic Glass Container

```jsx
import { LiquidGlass } from 'liquid-glass-apple-ui';

function MyCard() {
  return (
    <LiquidGlass variant="normal" color="white" intensity={0.5} style={{ padding: '2rem' }}>
      <h2>Hello Liquid Glass</h2>
      <p>Apple-style glassmorphism made easy.</p>
    </LiquidGlass>
  );
}
```

### Advanced Buttons

```jsx
import { LiquidButton } from 'liquid-glass-apple-ui';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <LiquidButton variant="chrome" color="blue" glow>
        Get Started
      </LiquidButton>
      
      <LiquidButton variant="thin" size="sm">
        Cancel
      </LiquidButton>
      
      <LiquidButton variant="solid" color="purple">
        Primary Action
      </LiquidButton>
    </div>
  );
}
```

## 🛠 Props Reference

### `<LiquidGlass />`

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `ultra-thin`, `thin`, `normal`, `thick`, `chrome` | `normal` | Thickness of the glass |
| `color` | `white`, `black`, `blue`, `purple`, `gold` | `white` | Tint color of the glass |
| `intensity` | `number` (0 to 1) | `1` | Multiplier for opacity and effects |
| `borderRadius` | `string` \| `number` | `24px` | Corner radius |
| `border` | `boolean` | `true` | Show/hide the highlight border |
| `shadow` | `boolean` | `true` | Show/hide the soft shadow |

### `<LiquidButton />`

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `GlassVariant` \| `solid` | `normal` | Button style |
| `color` | `GlassColor` | `white` | Button theme color |
| `size` | `sm`, `md`, `lg`, `xl` | `md` | Button dimensions |
| `glow` | `boolean` | `false` | Enable glow effect on hover |
| `fullWidth`| `boolean` | `false` | Expand to container width |

## 🧪 Development & Customization

You can easily wrap any component with `<LiquidGlass />` to "glassify" it:

```jsx
const MyCustomWidget = () => (
  <LiquidGlass variant="ultra-thin" style={{ padding: '10px' }}>
    {/* Your content */}
  </LiquidGlass>
);
```
