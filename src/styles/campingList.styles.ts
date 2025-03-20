import styled from 'styled-components';

export const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  height: calc(100vh - 180px); // 헤더, 검색바, 하단 네비게이션 높이를 제외
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    color: #666;
    font-size: 1rem;
  }
`;

export const CampingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const CampingCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardImage = styled.div<{ $imageUrl?: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$imageUrl || ''});
  background-size: cover;
  background-position: center;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CampingName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 8px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

export const TagItem = styled.span`
  padding: 4px 8px;
  background: #f3f4f6;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #4b5563;
`;

export const FavoriteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.3rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    position: relative;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
        background-color: #fff;
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`; 