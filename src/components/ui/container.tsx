import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { }

export function Container({ children, ...props }: ContainerProps) {
    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 16px',
            }}
            {...props}
        >
            {children}
        </div>
    );
} 