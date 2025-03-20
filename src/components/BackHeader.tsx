'use client';

import { useRouter } from 'next/navigation';
import {
    HeaderContainer,
    Logo,
    LoginButton,
    BackButton
} from '@/styles/header.styles';
import { signOut, useSession } from 'next-auth/react';

interface BackHeaderProps {
    title: string;
}

export default function BackHeader({ title }: BackHeaderProps) {
    const router = useRouter();
    const { data: session } = useSession();

    const handleLogout = () => {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
            signOut({ callbackUrl: '/' });
        }
    };
    return (
        <HeaderContainer>
            <BackButton onClick={() => router.back()}>
                ←
            </BackButton>
            <Logo>
                {title}
            </Logo>
            {session ? (
                <LoginButton onClick={handleLogout}>
                    로그아웃
                </LoginButton>
            ) : (
                <LoginButton onClick={() => router.push('/login')}>
                    로그인
                </LoginButton>
            )}
        </HeaderContainer>
    );
} 