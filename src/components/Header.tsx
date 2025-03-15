'use client';

import {
    HeaderContainer,
    Logo,
    LoginButton,
    PlaceholderDiv
} from '@/styles/header.styles';

export default function Header() {
    return (
        <HeaderContainer>
            <PlaceholderDiv />
            <Logo>
                CAMPING
            </Logo>
            <LoginButton>
                로그인
            </LoginButton>
        </HeaderContainer>
    );
} 