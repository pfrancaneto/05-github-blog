import { FaGithub } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi2';

import { SocialMediaContainer } from './styles';
import { useGithubBlog } from '../../../../context/GithubBlogContext';

const SocialMedia = () => {
  const { dataBlog } = useGithubBlog();
  return (
    <SocialMediaContainer>
      <span>
        <FaGithub size={18} color="#3A536B" />
        {dataBlog.login}
      </span>
      {dataBlog.company && (
        <span>
          <FaBuilding size={18} color="#3A536B" />
          {dataBlog.company}
        </span>
      )}
      <span>
        <HiUsers size={18} color="#3A536B" />
        {dataBlog.followers} seguidores
      </span>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
