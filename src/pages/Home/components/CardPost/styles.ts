import styled from 'styled-components';

export const CardPostContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border 0.5s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  &:last-child {
    margin: 0 0 5rem;
  }
`;

export const CardPostHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  > strong {
    max-width: 15.625rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: bold;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`;

export const CardPostDescription = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
