'use client';

import { useParams } from 'next/navigation';
import CategoryPage from '@/components/CategoryPage';
import BackHeader from '@/components/BackHeader';
import {
    AppWrapper,
    MobileContainer,
    DesktopSection,
    QRCodeWrapper,
    DownloadText,
    SubText,
    MainContainer
} from '@/styles/common.styles';
import styled from 'styled-components';
import CategoryMenu from '@/components/CategoryMenu';

const PrepareContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    text-align: center;
    padding: 20px;
`;

const PrepareIcon = styled.div`
    font-size: 48px;
    margin-bottom: 20px;
`;

const PrepareTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #333;
`;

const PrepareText = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5;
`;

const categories = {
    camping: {
        title: '캠핑',
        industyTypes: ['일반야영장', '자동차야영장']
    },
    glamping: {
        title: '글램핑',
        industyTypes: ['글램핑']
    },
    caravan: {
        title: '카라반',
        industyTypes: ['카라반']
    },
    pension: {
        title: '펜션',
        industyTypes: ['펜션'],
        isPreparing: true
    }
};

export default function Page() {
    const params = useParams();
    const categoryId = params.id as string;
    const category = categories[categoryId as keyof typeof categories];

    if (!category) {
        return <div>카테고리를 찾을 수 없습니다.</div>;
    }

    const renderContent = () => {
        if (categoryId === 'pension') {
            return (
                <MobileContainer>
                    <BackHeader title={category.title} />
                    <MainContainer>
                        <PrepareContainer>
                            <PrepareIcon>🏗️</PrepareIcon>
                            <PrepareTitle>서비스 준비중입니다</PrepareTitle>
                            <PrepareText>
                                더 나은 서비스 제공을 위해 준비중입니다.<br />
                                곧 만나뵙겠습니다!
                            </PrepareText>
                        </PrepareContainer>
                    </MainContainer>
                </MobileContainer>
            );
        }

        return (
            <MobileContainer>
                <CategoryPage
                    title={category.title}
                    industyTypes={category.industyTypes}
                />
            </MobileContainer>
        );
    };

    return (
        <AppWrapper>
            {renderContent()}
            <DesktopSection>
                <QRCodeWrapper>
                    QR 코드
                </QRCodeWrapper>
                <DownloadText>캠핑 앱 다운로드</DownloadText>
                <SubText>
                    QR코드를 스캔하여<br />
                    모바일에서 더 편하게 이용하세요
                </SubText>
            </DesktopSection>
        </AppWrapper>
    );
} 