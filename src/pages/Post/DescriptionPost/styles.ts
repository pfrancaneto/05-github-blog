import styled from 'styled-components';

export const DescriptionPostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border: 0;
  border-radius: 10px;
  margin-top: -6rem;
  padding: 2.5rem;
  position: relative;
  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsDescriptionPost = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
`;

export const TitleAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
