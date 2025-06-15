import styled from 'styled-components';

export const DescriptionProfileContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme['base-text']};
`;
