import DescriptionPost from './DescriptionPost';
import ResumeIssue from './ResumeIssue';
import { PostContainer } from './styles';

const Post = () => {
  return (
    <PostContainer>
      <DescriptionPost />
      <ResumeIssue />
    </PostContainer>
  );
};

export default Post;
