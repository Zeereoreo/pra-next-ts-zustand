'use client';

import { SessionProvider } from "next-auth/react";
import StyledProvider from "./StyledProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <StyledProvider>
                {children}
            </StyledProvider>
        </SessionProvider>
    );
} 