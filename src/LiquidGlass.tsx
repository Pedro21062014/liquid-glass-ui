import React, { useState, useMemo } from 'react';

export type GlassVariant = 'ultra-thin' | 'thin' | 'normal' | 'thick' | 'chrome' | 'vibrant';
export type GlassColor = 'white' | 'black' | 'blue' | 'purple' | 'gold' | 'rose';

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: GlassVariant;
  color?: GlassColor;
  intensity?: number;
  borderRadius?: string | number;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'apple';
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  variant = 'normal',
  color = 'white',
  intensity = 1,
  borderRadius = '24px',
  border = true,
  shadow = 'apple',
  style,
  className = '',
  ...props
}) => {
  const glassStyles = useMemo(() => {
    const configs: Record<GlassVariant, { blur: number; opacity: number; saturate: number; brightness: number }> = {
      'ultra-thin': { blur: 12, opacity: 0.03, saturate: 110, brightness: 1.0 },
      'thin': { blur: 25, opacity: 0.08, saturate: 150, brightness: 1.1 },
      'normal': { blur: 40, opacity: 0.15, saturate: 180, brightness: 1.2 },
      'thick': { blur: 60, opacity: 0.35, saturate: 200, brightness: 1.3 },
      'chrome': { blur: 80, opacity: 0.6, saturate: 250, brightness: 1.5 },
      'vibrant': { blur: 30, opacity: 0.2, saturate: 300, brightness: 1.1 },
    };

    const colors: Record<GlassColor, string> = {
      white: '255, 255, 255',
      black: '15, 15, 15',
      blue: '0, 122, 255',
      purple: '175, 82, 222',
      gold: '255, 159, 10',
      rose: '255, 45, 85',
    };

    const config = configs[variant];
    const baseColor = colors[color];
    const finalOpacity = config.opacity * intensity;

    const shadows = {
      none: 'none',
      sm: '0 2px 8px rgba(0,0,0,0.05)',
      md: '0 8px 24px rgba(0,0,0,0.1)',
      lg: '0 16px 48px rgba(0,0,0,0.15)',
      apple: '0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0,0,0,0.05)',
    };

    return {
      position: 'relative' as const,
      backdropFilter: `blur(${config.blur}px) saturate(${config.saturate}%) brightness(${config.brightness})`,
      WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturate}%) brightness(${config.brightness})`,
      backgroundColor: `rgba(${baseColor}, ${finalOpacity})`,
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      border: border ? `1px solid rgba(255, 255, 255, ${color === 'black' ? 0.1 : 0.25})` : 'none',
      boxShadow: shadows[shadow],
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      overflow: 'hidden',
      ...style,
    };
  }, [variant, color, intensity, borderRadius, border, shadow, style]);

  return (
    <div style={glassStyles} className={`liquid-glass ${className}`} {...props}>
      {border && (
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export const LiquidNavBar: React.FC<{ 
  children: React.ReactNode; 
  variant?: GlassVariant;
  color?: GlassColor;
  className?: string;
  fixed?: boolean;
}> = ({ children, variant = 'thin', color = 'white', className = '', fixed = true }) => {
  return (
    <div style={{
      position: fixed ? 'fixed' : 'relative',
      top: fixed ? '20px' : '0',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: 'auto',
      minWidth: '300px',
      maxWidth: '90vw'
    }} className={className}>
      <LiquidGlass 
        variant={variant} 
        color={color} 
        borderRadius="999px" 
        style={{ padding: '8px 20px' }}
      >
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '20px' 
        }}>
          {children}
        </nav>
      </LiquidGlass>
    </div>
  );
};
