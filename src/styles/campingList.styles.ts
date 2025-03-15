import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 20px;
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
  background-image: url(${props => props.$imageUrl || '/default-camping.jpg'});
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