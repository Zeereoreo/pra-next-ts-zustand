'use client';

import StyledComponentsRegistry from '../app/registry';

interface StyledProviderProps {
    children: React.ReactNode;
}

export default function StyledProvider({ children }: StyledProviderProps) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
} 