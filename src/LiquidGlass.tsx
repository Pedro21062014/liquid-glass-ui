import React from 'react';

interface LiquidGlassProps {
  children: React.ReactNode;
  blur?: number;
  opacity?: number;
  borderOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  blur = 16,
  opacity = 0.2,
  borderOpacity = 0.3,
  className = '',
  style = {},
}) => {
  const glassStyle: React.CSSProperties = {
    backdropFilter: `blur(${blur}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    borderRadius: '12px',
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    ...style,
  };

  return (
    <div style={glassStyle} className={`liquid-glass-container ${className}`}>
      {children}
    </div>
  );
};
