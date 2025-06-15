import { FaGithub } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa6';

import { DetailsContainer } from './styles';

const Details = () => {
  return (
    <DetailsContainer>
      <span>
        <FaGithub size={18} />
        cameronwll
      </span>
      <span>
        <FaCalendarDay size={18} />
        Há 1 dia
      </span>
      <span>
        <FaComment size={18} />5 comentários
      </span>
    </DetailsContainer>
  );
};

export default Details;
