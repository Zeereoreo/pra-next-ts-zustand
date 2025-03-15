import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  background: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const PlaceholderDiv = styled.div`
  width: 80px;
`; 