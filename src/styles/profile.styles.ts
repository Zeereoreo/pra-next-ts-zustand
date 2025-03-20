import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  padding: 2rem 1rem;
  padding-bottom: 5rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfileName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProfileEmail = styled.p`
  color: #666;
  font-size: 1rem;
`;

export const ProfileSection = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;