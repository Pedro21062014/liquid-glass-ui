import React from 'react';
import { LiquidGlass, GlassVariant, GlassColor } from './LiquidGlass';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassVariant | 'solid';
  color?: GlassColor;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  glow?: boolean;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = 'normal',
  color = 'white',
  size = 'md',
  fullWidth = false,
  glow = false,
  style,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px' },
    md: { padding: '12px 24px', fontSize: '15px' },
    lg: { padding: '16px 32px', fontSize: '17px' },
    xl: { padding: '20px 40px', fontSize: '20px' },
  };

  const isSolid = variant === 'solid';

  const buttonStyle: React.CSSProperties = {
    ...sizes[size],
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    position: 'relative',
    color: color === 'white' && !isSolid ? '#fff' : (isSolid && color !== 'white' ? '#fff' : 'inherit'),
    ...(isSolid ? {
        backgroundColor: color === 'white' ? '#fff' : (color === 'black' ? '#000' : `rgb(${getColorValue(color)})`),
        color: color === 'white' ? '#000' : '#fff',
        borderRadius: '14px',
    } : {}),
    ...style,
  };

  function getColorValue(c: GlassColor) {
    const values = { white: '255,255,255', black: '0,0,0', blue: '10,132,255', purple: '191,90,242', gold: '255,214,10' };
    return values[c];
  }

  const content = (
    <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px' }}>
      {children}
    </span>
  );

  if (isSolid) {
    return (
      <button 
        style={buttonStyle} 
        className={`liquid-button-solid ${className}`}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            if (glow) e.currentTarget.style.boxShadow = `0 0 20px rgba(${getColorValue(color)}, 0.4)`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
        }}
        {...props}
      >
        {content}
      </button>
    );
  }

  return (
    <LiquidGlass
      variant={variant as GlassVariant}
      color={color}
      borderRadius={size === 'sm' ? 10 : 14}
      style={{ display: 'inline-flex', padding: 0 }}
    >
      <button
        style={{
          ...buttonStyle,
          background: 'transparent',
          border: 'none',
          outline: 'none',
        }}
        className={`liquid-button-glass ${className}`}
        onMouseEnter={(e) => {
          e.currentTarget.parentElement!.style.transform = 'translateY(-2px) scale(1.02)';
          if (glow) e.currentTarget.parentElement!.style.boxShadow = `0 15px 30px rgba(0,0,0,0.2)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.parentElement!.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.parentElement!.style.boxShadow = 'none';
        }}
        {...props}
      >
        {content}
      </button>
    </LiquidGlass>
  );
};
