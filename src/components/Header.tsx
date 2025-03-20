'use client';

import {
    HeaderContainer,
    Logo,
    LoginButton,
    PlaceholderDiv
} from '@/styles/header.styles';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
    const router = useRouter();
    const { data: session } = useSession();

    const handleLogout = () => {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
            signOut({ callbackUrl: '/' });
        }
    };

    return (
        <HeaderContainer>
            <PlaceholderDiv />
            <Logo>
                CAMPING
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