import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 40px;
  background: #f5f5f5;
  overflow: hidden;
`;

export const MobileContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: calc(100vh - 40px);
  min-height: calc(100vh - 40px);
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 60px;
`;

export const DesktopSection = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 40px);
  min-height: calc(100vh - 40px);
  
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const QRCodeWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const DownloadText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 1.5;
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
`; 