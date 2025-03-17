'use client';

import { useSearchStore } from '@/store/searchStore';
import BackHeader from '@/components/BackHeader';
import Search from '@/components/Search';
import BottomNavigation from '@/components/BottomNavigation';
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

export default function SearchResultPage() {
    const { searchResults } = useSearchStore();
    const items = searchResults.data;
    const campingSites = Array.isArray(searchResults) ? searchResults : [searchResults];

    console.log('검색 결과', searchResults);

    return (
        <AppWrapper>
            <MobileContainer>
                <BackHeader title="검색 결과" />
                <Search />
                <MainContainer>
                    <ListContainer>
                        <CampingGrid>
                            {campingSites.map((site) => (
                                <CampingCard key={site.contentId}>
                                    <CardImage $imageUrl={site.firstImageUrl} />
                                    <CardContent>
                                        <CampingName>{site.facltNm}</CampingName>
                                        <TagList>
                                            {site.induty && <TagItem>{site.induty}</TagItem>}
                                        </TagList>
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