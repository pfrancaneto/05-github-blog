import cover from '../../assets/Cover.svg';

import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={cover} alt="Logo Blog" />
    </HeaderContainer>
  );
};

export default Header;
