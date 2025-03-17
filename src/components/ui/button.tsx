import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export function Button({ className = '', variant = 'primary', children, ...props }: ButtonProps) {
    const baseStyles = {
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'background-color 0.2s',
    };

    const variantStyles = {
        primary: {
            backgroundColor: '#007bff',
            color: 'white',
        },
        secondary: {
            backgroundColor: '#6c757d',
            color: 'white',
        },
    };

    return (
        <button
            style={{
                ...baseStyles,
                ...variantStyles[variant],
            }}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
} 