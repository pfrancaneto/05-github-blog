import { ArrowSquareOutIcon } from '@phosphor-icons/react';

import { useGithubBlog } from '../../../../context/GithubBlogContext';

import {
  Description,
  DescriptionProfileContainer,
  TitleDescription,
} from './styles';

const DescriptionProfile = () => {
  const { dataBlog } = useGithubBlog();

  return (
    <DescriptionProfileContainer>
      <TitleDescription>
        <strong>{dataBlog.name}</strong>
        <a href="https://github.com/pfrancaneto" target="_blank">
          github
          <ArrowSquareOutIcon size={15} weight="bold" />
        </a>
      </TitleDescription>
      <Description>{dataBlog.bio}</Description>
    </DescriptionProfileContainer>
  );
};

export default DescriptionProfile;
