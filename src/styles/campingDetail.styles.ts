import styled from 'styled-components';

export const DetailContainer = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

export const CampingImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const CampingTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Tag = styled.span`
  padding: 4px 12px;
  background-color: #f0f0f0;
  border-radius: 16px;
  font-size: 14px;
  color: #666;
`;

export const InfoSection = styled.section`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

export const InfoValue = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 24px;
`;

export const FacilityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FacilityItem = styled.span`
  padding: 6px 12px;
  background-color: #e8f5e9;
  border-radius: 16px;
  font-size: 14px;
  color: #2e7d32;
`;

export const UrlSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const UrlIcon = styled.span`
  font-size: 20px;
  color: #666;
`;

export const UrlLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
  word-break: break-all;
  
  &:hover {
    text-decoration: underline;
  }
`; 