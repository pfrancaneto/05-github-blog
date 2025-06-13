import DescriptionProfile from './components/DescriptionProfile';
import SocialMedia from './components/SocialMedia';

import Avatar from '../../assets/avatar.svg';

import {
  HomeContainer,
  ProfileContainer,
  ProfileInfoContainer,
} from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={Avatar} alt="Avatar do Profile" />
        <ProfileInfoContainer>
          <DescriptionProfile />
          <SocialMedia />
        </ProfileInfoContainer>
      </ProfileContainer>
    </HomeContainer>
  );
};

export default Home;
