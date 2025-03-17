import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const LoginDescription = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialButton = styled.button<{ $bgColor: string; $textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.$bgColor};
  color: ${props => props.$textColor};
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`; 