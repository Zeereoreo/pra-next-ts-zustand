import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
  background: white;
  border-bottom: 1px solid #eee;
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 44px;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`;

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
  z-index: 10;
`;

export const SearchModal = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  transform: translateY(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 11;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const SearchSection = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const DateButton = styled.div`
  flex: 1;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  background: white;

  &:hover {
    border-color: #666;
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    width: 320px;
    font-family: inherit;

    &__header {
      background: white;
      border-bottom: none;
      padding-top: 20px;
      border-radius: 12px 12px 0 0;
    }

    &__month {
      margin: 0 10px 10px;
    }

    &__day-name {
      width: 40px;
      margin: 5px 0;
      color: #999;
      font-size: 12px;
    }

    &__day {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin: 0;
      border-radius: 50%;
      color: #333;

      &:hover {
        background: #f5f5f5;
      }

      &--selected {
        background: #ff4e50 !important;
        color: white !important;
      }

      &--in-range {
        background: #ffe8e8;
        color: #333;
      }

      &--disabled {
        color: #ccc;
      }
    }

    &__current-month {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      padding-bottom: 10px;
    }
  }
`;

export const DateRangeDisplay = styled.div`
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #ff4e50;
  }
`;

export const DateInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  background: white;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

export const PersonnelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 16px;
  margin-bottom: 24px;
`;

export const PersonnelControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ControlButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: white;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #666;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.button<{ $isSelected?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${props => props.$isSelected ? '#333' : '#ddd'};
  background: ${props => props.$isSelected ? '#333' : 'white'};
  color: ${props => props.$isSelected ? 'white' : '#666'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #333;
  }
`;

export const SearchButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #eee;
  z-index: 12;
`;

export const SearchSubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: #ff4e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #ff3a3c;
  }

  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;

// export const RecentSearches = styled.div`