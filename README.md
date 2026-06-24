# 💎 Liquid Glass Apple Pro (Inspira Edition)

A professional-grade UI library that captures the exact physics, aesthetics, and interaction patterns of Apple's high-end design systems.

## ✨ Elite Features

- 🍎 **Physics-Based Interactions**: Buttons use custom cubic-beziers (`0.16, 1, 0.3, 1`) for that iconic "organic" Apple feel.
- 🐚 **Apple Scale Effect**: Hold the button and watch it grow (`activeScale`), exactly like the Control Center and Apple TV icons.
- 🔲 **Rim Lighting**: Pure CSS "inner-stroke" rim lighting on glass edges for realistic depth.
- 🎨 **SF Pro Aesthetics**: Tuned for SF Pro typography, letter-spacing, and corner smoothing.
- 🧊 **6 Glass Variants**: Including the new `vibrant` for high-saturation backgrounds.
- 📱 **Haptic-Ready**: Touch-friendly events for mobile responsiveness.

## 📦 Installation

```bash
npm install liquid-glass-apple-ui
```

## 🚀 Pro Usage

### The "Apple Hold" Button

```jsx
import { LiquidButton } from 'liquid-glass-apple-ui';

function ControlCenter() {
  return (
    <LiquidButton 
      variant="chrome" 
      color="white" 
      activeScale={1.1} // Grows significantly when held
      glow
    >
      <FlashlightIcon />
    </LiquidButton>
  );
}
```

### Pro Containers

```jsx
import { LiquidGlass } from 'liquid-glass-apple-ui';

const Widget = () => (
  <LiquidGlass 
    variant="vibrant" 
    color="blue" 
    shadow="apple"
    borderRadius={32}
  >
    <div style={{ padding: 24 }}>
      <h3>Vibrant Content</h3>
    </div>
  </LiquidGlass>
);
```

## 🛠 Advanced API

### `<LiquidGlass />`
- `variant`: `ultra-thin` | `thin` | `normal` | `thick` | `chrome` | `vibrant`
- `shadow`: `none` | `sm` | `md` | `lg` | `apple`
- `border`: `boolean` (Adds the rim-light effect)

### `<LiquidButton />`
- `activeScale`: `number` (Default: `1.05`. The growth factor when the button is held/pressed)
- `variant`: `GlassVariant` | `solid` | `ghost`
- `size`: `xs` | `sm` | `md` | `lg` | `xl`

## 🎨 Design Principles
This library follows the **Apple Human Interface Guidelines**:
1. **Materiality**: Using background blur to provide context.
2. **Responsiveness**: Immediate visual feedback on touch/click.
3. **Continuity**: Smooth transitions between states.
