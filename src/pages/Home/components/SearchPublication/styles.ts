import styled from 'styled-components';

export const SearchPublicationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  margin: 4.5rem 0 3rem;

  input[type='text'] {
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const TitleQuantityPublication = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`;
