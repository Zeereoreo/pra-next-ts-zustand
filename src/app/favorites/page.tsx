'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppWrapper, DesktopSection, DownloadText, MobileContainer, QRCodeWrapper, SubText } from '@/styles/common.styles';
import {
    ListContainer,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    TagList,
    TagItem,
} from '@/styles/campingList.styles';
import BottomNavigation from '@/components/BottomNavigation';
import BackHeader from '@/components/BackHeader';
import FavoriteButton from '@/components/FavoriteButton';
import { useFavoriteStore } from '@/store/favoriteStore';
import { useCampingStore } from '@/store/campingStore';
import { type CampingSite } from '@/api/camping';

export default function FavoritesPage() {
    const router = useRouter();
    const favorites = useFavoriteStore(state => state.favorites);
    const setStoreCampingSites = useCampingStore(state => state.setCampingSites);
    const [campingSites, setCampingSites] = useState<CampingSite[]>([]);

    useEffect(() => {
        setCampingSites(favorites as CampingSite[]);
        setStoreCampingSites(favorites as CampingSite[]); // store에 데이터 저장
    }, [favorites, setStoreCampingSites]);

    const handleCardClick = (contentId: string) => {
        router.push(`/camping/${contentId}`);
    };

    if (favorites.length === 0) {
        return (
            <AppWrapper>
                <MobileContainer>
                    <BackHeader title="즐겨찾기" />
                    <ListContainer>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            즐겨찾기한 캠핑장이 없습니다.
                        </div>
                    </ListContainer>
                    <BottomNavigation />
                </MobileContainer>
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

    return (
        <AppWrapper>
            <MobileContainer>
                <BackHeader title="즐겨찾기" />
                <ListContainer>
                    <CampingGrid>
                        {campingSites.map((site) => (
                            <CampingCard
                                key={site.contentId}
                                onClick={() => handleCardClick(site.contentId)}
                                style={{ cursor: 'pointer' }}
                            >
                                <CardImage $imageUrl={site.firstImageUrl} />
                                <CardContent>
                                    <CampingName>{site.facltNm}</CampingName>
                                    <TagList>
                                        {site.induty && <TagItem>{site.induty}</TagItem>}
                                    </TagList>
                                    <FavoriteButton site={site} />
                                </CardContent>
                            </CampingCard>
                        ))}
                    </CampingGrid>
                </ListContainer>
                <BottomNavigation />
            </MobileContainer>
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