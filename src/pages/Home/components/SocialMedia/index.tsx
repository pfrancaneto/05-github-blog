import { BuildingIcon, GithubLogoIcon, UsersIcon } from '@phosphor-icons/react';

import { SocialMediaContainer } from './styles';

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <span>
        <GithubLogoIcon size={18} weight="fill" color="#3A536B" />
        cameronwll
      </span>
      <span>
        <BuildingIcon size={18} weight="fill" color="#3A536B" />
        Rocketseat
      </span>
      <span>
        <UsersIcon size={18} weight="fill" color="#3A536B" />
        32 seguidores
      </span>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
