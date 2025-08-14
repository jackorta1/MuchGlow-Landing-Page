import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'var(--colored)' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <div 
      className={`spinner-border ${sizeClasses[size]}`} 
      role="status"
      style={{ color }}
      aria-label="Loading"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;