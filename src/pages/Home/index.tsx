import CardPost from './components/CardPost';
import Profile from './components/Profile';
import SearchPublication from './components/SearchPublication';

import { HomeContainer, RepositoryCard } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <SearchPublication />
      <RepositoryCard>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </RepositoryCard>
    </HomeContainer>
  );
};

export default Home;
