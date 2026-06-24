import React, { useMemo } from 'react';

export type GlassVariant = 'ultra-thin' | 'thin' | 'normal' | 'thick' | 'chrome';
export type GlassColor = 'white' | 'black' | 'blue' | 'purple' | 'gold';

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: GlassVariant;
  color?: GlassColor;
  intensity?: number; // 0 to 1
  borderRadius?: string | number;
  border?: boolean;
  shadow?: boolean;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  variant = 'normal',
  color = 'white',
  intensity = 1,
  borderRadius = '24px',
  border = true,
  shadow = true,
  style,
  className = '',
  ...props
}) => {
  const glassStyles = useMemo(() => {
    const configs: Record<GlassVariant, { blur: number; opacity: number; saturate: number }> = {
      'ultra-thin': { blur: 10, opacity: 0.05, saturate: 120 },
      'thin': { blur: 20, opacity: 0.1, saturate: 140 },
      'normal': { blur: 30, opacity: 0.2, saturate: 180 },
      'thick': { blur: 50, opacity: 0.4, saturate: 200 },
      'chrome': { blur: 60, opacity: 0.7, saturate: 250 },
    };

    const colors: Record<GlassColor, string> = {
      white: '255, 255, 255',
      black: '0, 0, 0',
      blue: '10, 132, 255',
      purple: '191, 90, 242',
      gold: '255, 214, 10',
    };

    const config = configs[variant];
    const baseColor = colors[color];
    const opacity = config.opacity * intensity;

    const baseStyle: React.CSSProperties = {
      backdropFilter: `blur(${config.blur}px) saturate(${config.saturate}%)`,
      WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturate}%)`,
      backgroundColor: `rgba(${baseColor}, ${opacity})`,
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      border: border ? `1px solid rgba(${baseColor}, ${0.1 * intensity + 0.1})` : 'none',
      boxShadow: shadow ? `0 10px 40px -10px rgba(0, 0, 0, ${0.1 * intensity + 0.1})` : 'none',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      ...style,
    };

    return baseStyle;
  }, [variant, color, intensity, borderRadius, border, shadow, style]);

  return (
    <div style={glassStyles} className={`liquid-glass ${className}`} {...props}>
      {/* Glossy Overlay for 'Chrome' variant */}
      {variant === 'chrome' && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none'
        }} />
      )}
      {children}
    </div>
  );
};
