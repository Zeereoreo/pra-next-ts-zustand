'use client';

import { useParams } from 'next/navigation';
import BackHeader from './BackHeader';
import { AppWrapper, MobileContainer, DesktopSection, QRCodeWrapper, DownloadText, SubText, MainContainer } from '@/styles/common.styles';
import {
    DetailContainer,
    CampingImage,
    CampingTitle,
    TagList,
    Tag,
    InfoSection,
    SectionTitle,
    InfoGrid,
    InfoItem,
    InfoLabel,
    InfoValue,
    Description,
    FacilityList,
    FacilityItem,
    UrlSection,
    UrlIcon,
    UrlLink
} from '@/styles/campingDetail.styles';
import BottomNavigation from './BottomNavigation';
import { type CampingSite } from '@/api/camping';

interface CampingDetailProps {
    title: string;
    imageUrl: string;
    tags: string[];
    site: CampingSite;
}

export default function CampingDetail({ title, imageUrl, tags, site }: CampingDetailProps) {
    const params = useParams();
    const campingId = params.id;

    return (
        <AppWrapper>
            <MobileContainer>
                <BackHeader title="캠핑장 상세" />
                <MainContainer>
                    <DetailContainer>
                        <CampingImage $imageUrl={imageUrl} />
                        <CampingTitle>{title}</CampingTitle>
                        <TagList>
                            {tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </TagList>

                        {site.homepage && (
                            <UrlSection>
                                <UrlIcon>🌐</UrlIcon>
                                {/* <UrlLink
                                    href={site.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {site.homepage}
                                </UrlLink> */}
                                <UrlLink
                                    href={site.homepage.startsWith('http') ? site.homepage : `https://${site.homepage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                        e.stopPropagation(); // 이벤트 버블링 방지
                                    }}
                                >
                                    {site.homepage}
                                </UrlLink>
                            </UrlSection>
                        )}

                        <Description>{site.lineIntro}</Description>

                        <InfoSection>
                            <SectionTitle>기본 정보</SectionTitle>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoLabel>주소</InfoLabel>
                                    <InfoValue>{site.addr1}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>전화번호</InfoLabel>
                                    <InfoValue>{site.tel}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>운영기간</InfoLabel>
                                    <InfoValue>{site.operPdCl}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>운영일</InfoLabel>
                                    <InfoValue>{site.operDeCl}</InfoValue>
                                </InfoItem>
                            </InfoGrid>
                        </InfoSection>

                        <InfoSection>
                            <SectionTitle>부대시설</SectionTitle>
                            <FacilityList>
                                {site.sbrsCl.split(',').map((facility, index) => (
                                    <FacilityItem key={index}>{facility.trim()}</FacilityItem>
                                ))}
                            </FacilityList>
                        </InfoSection>

                        <InfoSection>
                            <SectionTitle>상세 소개</SectionTitle>
                            <Description>{site.intro}</Description>
                        </InfoSection>
                    </DetailContainer>
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