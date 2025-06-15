import DescriptionProfile from '../DescriptionProfile';
import SocialMedia from '../SocialMedia';

import { useGithubBlog } from '../../../../context/GithubBlogContext';

import { ProfileContainer, ProfileInfoContainer } from './styles';

const Profile = () => {
  const { dataBlog } = useGithubBlog();
  return (
    <ProfileContainer>
      <img src={dataBlog.avatar_url} alt="Avatar do Profile" />
      <ProfileInfoContainer>
        <DescriptionProfile />
        <SocialMedia />
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
