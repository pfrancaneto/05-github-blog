import { SearchPublicationContainer, TitleQuantityPublication } from './styles';

const SearchPublication = () => {
  return (
    <SearchPublicationContainer>
      <TitleQuantityPublication>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </TitleQuantityPublication>
      <input type="text" placeholder="Buscar repositório" />
    </SearchPublicationContainer>
  );
};

export default SearchPublication;
