import React from 'react';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  intensity?: number;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = 'glass',
  intensity = 1,
  style = {},
  className = '',
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ...style,
  };

  const variants: Record<string, React.CSSProperties> = {
    glass: {
      background: `rgba(255, 255, 255, ${0.1 * intensity})`,
      backdropFilter: `blur(${8 * intensity}px)`,
      WebkitBackdropFilter: `blur(${8 * intensity}px)`,
      color: '#fff',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.1)',
    },
    primary: {
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#000',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.5)',
    }
  };

  const combinedStyle = { ...baseStyle, ...variants[variant] };

  return (
    <button
      style={combinedStyle}
      className={`liquid-button ${className}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px 0 rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px 0 rgba(0, 0, 0, 0.1)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};
