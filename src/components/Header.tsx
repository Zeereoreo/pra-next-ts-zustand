'use client';

import {
    HeaderContainer,
    Logo,
    LoginButton,
    PlaceholderDiv
} from '@/styles/header.styles';
import { useRouter } from 'next/navigation';
export default function Header() {
    const router = useRouter();

    return (
        <HeaderContainer>
            <PlaceholderDiv />
            <Logo>
                CAMPING
            </Logo>
            <LoginButton onClick={() => router.push('/login')}>
                로그인
            </LoginButton>
        </HeaderContainer>
    );
} 