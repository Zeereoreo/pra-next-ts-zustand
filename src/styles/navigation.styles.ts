import styled from 'styled-components';

export const BottomNavigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
`;

export const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  padding: 5px;
  width: 25%;

  &.active {
    color: #000;
  }

  &:hover {
    color: blue;
  }
`;

export const IconWrapper = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`; 