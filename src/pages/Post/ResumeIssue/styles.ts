import styled from 'styled-components';

export const ResumeIssueContainer = styled.section`
  width: 100%;
  padding: 2.5rem 2rem;
`;

export const SummaryBody = styled.div`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const Code = styled.div`
  width: 100%;
  height: 6.875rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-post']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 2px;
`;
