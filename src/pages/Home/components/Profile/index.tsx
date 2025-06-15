import DescriptionProfile from '../DescriptionProfile';
import SocialMedia from '../SocialMedia';
import Avatar from '../../../../assets/avatar.svg';

import { ProfileContainer, ProfileInfoContainer } from './styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <img src={Avatar} alt="Avatar do Profile" />
      <ProfileInfoContainer>
        <DescriptionProfile />
        <SocialMedia />
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
