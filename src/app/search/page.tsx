'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import BackHeader from '@/components/BackHeader';
import Search from '@/components/Search';
import BottomNavigation from '@/components/BottomNavigation';
import FavoriteButton from '@/components/FavoriteButton';
import {
    AppWrapper,
    MobileContainer,
    DesktopSection,
    QRCodeWrapper,
    DownloadText,
    SubText,
    MainContainer
} from '@/styles/common.styles';
import {
    ListContainer,
    CampingGrid,
    CampingCard,
    CardImage,
    CardContent,
    CampingName,
    TagList,
    TagItem
} from '@/styles/campingList.styles';
import { useSearchStore } from '@/store/searchStore';
import { useCampingStore } from '@/store/campingStore';

export default function SearchPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag') || '';
    const { searchResults } = useSearchStore();
    const setStoreCampingSites = useCampingStore(state => state.setCampingSites);
    const items = searchResults.data;
    const campingSites = Array.isArray(searchResults) ? searchResults : [searchResults];

    // 태그로 필터링된 결과
    const filteredSites = tag
        ? campingSites.filter(site => site.induty?.includes(tag))
        : campingSites;

    // 상세 페이지로 이동
    const handleCardClick = (contentId: string) => {
        setStoreCampingSites(filteredSites); // 현재 필터링된 결과를 store에 저장
        router.push(`/camping/${contentId}`);
    };

    // 검색 결과가 없을 때
    if (filteredSites.length === 0) {
        return (
            <AppWrapper>
                <MobileContainer>
                    <BackHeader title="검색 결과" />
                    <Search />
                    <MainContainer>
                        <ListContainer>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                {tag ? '해당 태그의 캠핑장이 없습니다.' : '검색 결과가 없습니다.'}
                            </div>
                        </ListContainer>
                    </MainContainer>
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
                <BackHeader title="검색 결과" />
                <Search />
                <MainContainer>
                    <ListContainer>
                        <CampingGrid>
                            {filteredSites.map((site) => (
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
                </MainContainer>
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