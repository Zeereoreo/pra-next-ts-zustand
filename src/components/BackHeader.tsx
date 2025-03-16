'use client';

import { useRouter } from 'next/navigation';
import {
    HeaderContainer,
    Logo,
    LoginButton,
    BackButton
} from '@/styles/header.styles';

interface BackHeaderProps {
    title: string;
}

export default function BackHeader({ title }: BackHeaderProps) {
    const router = useRouter();

    return (
        <HeaderContainer>
            <BackButton onClick={() => router.back()}>
                ←
            </BackButton>
            <Logo>
                {title}
            </Logo>
            <LoginButton>
                로그인
            </LoginButton>
        </HeaderContainer>
    );
} 