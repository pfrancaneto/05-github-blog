import styled from 'styled-components';

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  border: 0;
  border-radius: 10px;
  margin-top: -6rem;
  padding: 2.5rem;
  position: relative;
  z-index: 999;

  display: flex;
  align-items: center;
  gap: 2rem;
`;
