// Componente de ejemplo con uso mixto: tokens y valores hardcodeados (para probar auditoría)
import React from 'react';

export function Button({ children, variant = 'primary' }) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: variant === 'primary' ? '#3b82f6' : '#6b7280',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        color: '#ffffff',
      }}
    >
      {children}
    </button>
  );
}
