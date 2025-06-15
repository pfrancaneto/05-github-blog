import { Code, ResumeIssueContainer, SummaryBody } from './styles';

const ResumeIssue = () => {
  return (
    <ResumeIssueContainer>
      <SummaryBody>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </SummaryBody>
      <Code>
        let foo = 42; // foo is now a number <br />
        foo = ‘bar’; // foo is now a string <br />
        foo = true; // foo is now a boolean
      </Code>
    </ResumeIssueContainer>
  );
};

export default ResumeIssue;
