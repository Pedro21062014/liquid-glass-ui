import React, { useState } from 'react';
import { LiquidGlass, GlassVariant, GlassColor } from './LiquidGlass';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassVariant | 'solid' | 'ghost';
  color?: GlassColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  activeScale?: number;
  rounded?: boolean; // New prop for fully rounded buttons
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = 'normal',
  color = 'white',
  size = 'md',
  glow = false,
  activeScale = 1.05,
  rounded = true, // Default to true for that Apple look
  style,
  className = '',
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const sizes = {
    xs: { padding: '6px 14px', fontSize: '12px' },
    sm: { padding: '8px 18px', fontSize: '14px' },
    md: { padding: '12px 26px', fontSize: '16px' },
    lg: { padding: '16px 36px', fontSize: '18px' },
    xl: { padding: '20px 50px', fontSize: '20px' },
  };

  const currentSize = sizes[size];
  const isSolid = variant === 'solid';
  const isGhost = variant === 'ghost';
  const finalBorderRadius = rounded ? '999px' : (size === 'xl' ? '22px' : '16px');

  const getColorValue = (c: GlassColor) => {
    const values = { white: '255,255,255', black: '0,0,0', blue: '0,122,255', purple: '175,82,222', gold: '255,159,10', rose: '255,45,85' };
    return values[c];
  };

  const baseButtonStyle: React.CSSProperties = {
    ...currentSize,
    borderRadius: finalBorderRadius,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: isPressed ? `scale(${activeScale})` : (isHovered ? 'scale(1.02)' : 'scale(1)'),
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
    return {};
  };

  const buttonContent = (
    <button
      {...props}
      style={{
        ...baseButtonStyle,
        ...getVariantStyles(),
        background: isSolid || isGhost ? (getVariantStyles().backgroundColor) : 'transparent',
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
    >
      {children}
    </button>
  );

  if (isSolid || isGhost) return buttonContent;

  return (
    <LiquidGlass
      variant={variant as GlassVariant}
      color={color}
      borderRadius={finalBorderRadius}
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
