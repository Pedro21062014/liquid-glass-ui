# Liquid Glass UI

A perfect "Liquid Glass" (glassmorphism) UI library inspired by Apple's aesthetics.

## Installation

```bash
npm install liquid-glass-ui
```

## Usage

### LiquidGlass Wrapper

The `LiquidGlass` component provides the container effect.

```jsx
import { LiquidGlass } from 'liquid-glass-ui';

function App() {
  return (
    <div style={{ background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)', height: '100vh', padding: '50px' }}>
      <LiquidGlass blur={20} opacity={0.3} style={{ padding: '40px', maxWidth: '400px' }}>
        <h1>Glassmorphism Card</h1>
        <p>This is a beautiful liquid glass effect.</p>
      </LiquidGlass>
    </div>
  );
}
```

### LiquidButton

Ready-to-use buttons with built-in liquid glass effects.

```jsx
import { LiquidButton } from 'liquid-glass-ui';

function App() {
  return (
    <>
      <LiquidButton variant="glass">Glass Button</LiquidButton>
      <LiquidButton variant="primary">Primary</LiquidButton>
      <LiquidButton variant="secondary" onClick={() => alert('Clicked!')}>
        Custom Action
      </LiquidButton>
    </>
  );
}
```

## Creating Custom Buttons

You can easily extend the `LiquidButton` or create your own using the `LiquidGlass` component as a base.

```jsx
const MyCustomButton = ({ children }) => (
  <LiquidGlass blur={10} style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '8px' }}>
    {children}
  </LiquidGlass>
);
```

## Props

### LiquidGlass
- `blur`: number (default: 16)
- `opacity`: number (default: 0.2)
- `borderOpacity`: number (default: 0.3)
- `className`: string
- `style`: CSSProperties

### LiquidButton
- `variant`: 'glass' | 'primary' | 'secondary'
- `intensity`: number (affects blur and opacity)
- All standard HTML button attributes.
