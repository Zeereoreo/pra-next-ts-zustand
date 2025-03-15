import styled from 'styled-components';

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const SidebarItem = styled.li`
  flex: 1;
  min-width: 150px;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  &:hover {
    color: #3b82f6;
    background-color: #f3f4f6;
  }

  @media (min-width: 768px) {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
    padding: 0.75rem 0;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: transparent;
    }
  }
`; 