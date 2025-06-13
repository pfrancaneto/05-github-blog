import Cover from '../../assets/Cover.svg';

import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Cover} alt="Logo Blog" />
    </HeaderContainer>
  );
};

export default Header;
