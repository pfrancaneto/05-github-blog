import { IoIosArrowBack } from 'react-icons/io';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import {
  ActionsContainer,
  ActionsDescriptionPost,
  DescriptionPostContainer,
  TitleAndDetails,
} from './styles';
import Details from './Details';

const DescriptionPost = () => {
  return (
    <DescriptionPostContainer>
      <ActionsContainer>
        <ActionsDescriptionPost>
          <IoIosArrowBack />
          voltar
        </ActionsDescriptionPost>
        <ActionsDescriptionPost>
          ver no github
          <FaArrowUpRightFromSquare size={12} />
        </ActionsDescriptionPost>
      </ActionsContainer>
      <TitleAndDetails>
        <strong>JavaScript data types and data structures</strong>
        <Details />
      </TitleAndDetails>
    </DescriptionPostContainer>
  );
};

export default DescriptionPost;
