import DescriptionProfile from './components/DescriptionProfile';
import SocialMedia from './components/SocialMedia';

import Avatar from '../../assets/avatar.svg';

import {
  HomeContainer,
  ProfileContainer,
  ProfileInfoContainer,
  RepositoryCard,
} from './styles';
import CardPost from './components/CardPost';
import SearchPublication from './components/SearchPublication';

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
      <SearchPublication />
      <RepositoryCard>
        <CardPost />
        <CardPost />
      </RepositoryCard>
    </HomeContainer>
  );
};

export default Home;
