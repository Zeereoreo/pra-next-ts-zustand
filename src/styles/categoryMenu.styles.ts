import styled from 'styled-components';

export const MenuContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MenuItem = styled.div<{ $isSelected?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s;
  background: ${props => props.$isSelected ? '#f3f4f6' : 'transparent'};

  &:hover {
    background: #f3f4f6;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 24px;
`;

export const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`; 