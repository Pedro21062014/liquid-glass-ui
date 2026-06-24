import React from 'react';
import { LiquidGlass, LiquidButton } from './src';

const Demo = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <LiquidGlass style={{ padding: '40px', borderRadius: '24px', textAlign: 'center', width: '300px' }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Liquid Glass</h2>
        <p style={{ opacity: 0.8, marginBottom: '20px' }}>Apple-style glassmorphism effect.</p>
        <LiquidButton variant="glass" style={{ width: '100%' }}>Get Started</LiquidButton>
      </LiquidGlass>

      <div style={{ display: 'flex', gap: '10px' }}>
        <LiquidButton variant="primary">Buy Now</LiquidButton>
        <LiquidButton variant="secondary">Learn More</LiquidButton>
      </div>

      <LiquidGlass blur={5} opacity={0.1} style={{ padding: '10px 20px', borderRadius: '50px' }}>
        <span style={{ fontSize: '14px' }}>Custom Low Blur Tag</span>
      </LiquidGlass>
    </div>
  );
};

export default Demo;
