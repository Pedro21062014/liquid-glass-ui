import React, { useState, useRef } from 'react';
import { LiquidGlass, GlassVariant, GlassColor } from './LiquidGlass';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassVariant | 'solid' | 'ghost';
  color?: GlassColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  activeScale?: number; // How much it grows on hold
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = 'normal',
  color = 'white',
  size = 'md',
  glow = false,
  activeScale = 1.05,
  style,
  className = '',
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const sizes = {
    xs: { padding: '6px 12px', fontSize: '12px', borderRadius: '10px' },
    sm: { padding: '8px 16px', fontSize: '14px', borderRadius: '12px' },
    md: { padding: '12px 24px', fontSize: '16px', borderRadius: '16px' },
    lg: { padding: '16px 32px', fontSize: '18px', borderRadius: '18px' },
    xl: { padding: '20px 44px', fontSize: '20px', borderRadius: '22px' },
  };

  const currentSize = sizes[size];
  const isSolid = variant === 'solid';
  const isGhost = variant === 'ghost';

  const getColorValue = (c: GlassColor) => {
    const values = { white: '255,255,255', black: '0,0,0', blue: '0,122,255', purple: '175,82,222', gold: '255,159,10', rose: '255,45,85' };
    return values[c];
  };

  const baseButtonStyle: React.CSSProperties = {
    ...currentSize,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: isPressed ? `scale(${activeScale})` : (isHovered ? 'scale(1.02)' : 'scale(1)'),
    filter: isPressed ? 'brightness(0.9)' : 'none',
    position: 'relative',
    ...style,
  };

  const getVariantStyles = (): React.CSSProperties => {
    if (isSolid) {
      return {
        backgroundColor: color === 'white' ? '#fff' : (color === 'black' ? '#000' : `rgb(${getColorValue(color)})`),
        color: color === 'white' ? '#000' : '#fff',
        boxShadow: isHovered && glow ? `0 10px 30px rgba(${getColorValue(color)}, 0.3)` : '0 4px 12px rgba(0,0,0,0.1)',
      };
    }
    if (isGhost) {
      return {
        backgroundColor: isHovered ? `rgba(${getColorValue(color)}, 0.1)` : 'transparent',
        color: color === 'white' ? '#fff' : `rgb(${getColorValue(color)})`,
      };
    }
    return {}; // Handled by LiquidGlass wrapper
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const buttonContent = (
    <button
      {...props}
      style={{
        ...baseButtonStyle,
        ...getVariantStyles(),
        background: isSolid || isGhost ? (getVariantStyles().backgroundColor) : 'transparent',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {children}
    </button>
  );

  if (isSolid || isGhost) return buttonContent;

  return (
    <LiquidGlass
      variant={variant as GlassVariant}
      color={color}
      borderRadius={currentSize.borderRadius}
      shadow={isHovered ? 'lg' : 'apple'}
      style={{
        display: 'inline-flex',
        padding: 0,
        transform: isPressed ? `scale(${activeScale})` : (isHovered ? 'scale(1.02)' : 'scale(1)'),
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {buttonContent}
    </LiquidGlass>
  );
};
