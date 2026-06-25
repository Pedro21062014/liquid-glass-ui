# 💎 Liquid Glass Apple Pro

Professional Apple-grade UI library with physics-based interactions.

## 🚀 Features

- 🐚 **Apple Scale Effect**: Hold the button and it grows (`activeScale`).
- 🔲 **Rim Lighting**: Realistic CSS "inner-stroke" for depth.
- 💊 **Pill-Shaped Design**: Buttons are fully rounded by default (`rounded={true}`).
- 🧭 **LiquidNavBar**: Ready-to-use glass floating navigation bar.

## 📦 Installation
```bash
npm install liquid-glass-apple-ui
```

## 🛠 Usage

### 1. Floating Navigation Bar
The `LiquidNavBar` creates a floating glass pill-shaped bar. Perfect for modern landing pages.

```jsx
import { LiquidNavBar, LiquidButton } from 'liquid-glass-apple-ui';

function Header() {
  return (
    <LiquidNavBar variant="vibrant" color="white">
      <div style={{ fontWeight: 'bold' }}>Logo</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <LiquidButton variant="ghost" size="sm">Home</LiquidButton>
        <LiquidButton variant="ghost" size="sm">About</LiquidButton>
      </div>
      <LiquidButton variant="solid" color="black" size="sm">
        Connect
      </LiquidButton>
    </LiquidNavBar>
  );
}
```

### 2. Pro Buttons (Hold-to-Grow)
Buttons are rounded by default. Use `activeScale` to control the growth effect when held.

```jsx
import { LiquidButton } from 'liquid-glass-apple-ui';

<LiquidButton 
  variant="chrome" 
  activeScale={1.15} // Professional growth effect
  glow
>
  Click & Hold Me
</LiquidButton>
```

## 🛠 API

### `<LiquidNavBar />`
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `GlassVariant` | `thin` | Glass thickness |
| `fixed` | `boolean` | `true` | If true, floats at top of screen |

### `<LiquidButton />`
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `rounded` | `boolean` | `true` | Makes button pill-shaped |
| `activeScale` | `number` | `1.05` | Scale factor on hold/press |

### `<LiquidGlass />` (Core Component)
- Use this to wrap any div to give it the apple glass effect.
