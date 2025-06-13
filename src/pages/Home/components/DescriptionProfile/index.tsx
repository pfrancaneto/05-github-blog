import { ArrowSquareOutIcon } from '@phosphor-icons/react';

import {
  Description,
  DescriptionProfileContainer,
  TitleDescription,
} from './styles';

const DescriptionProfile = () => {
  return (
    <DescriptionProfileContainer>
      <TitleDescription>
        <strong>Cameron Williamson</strong>
        <span>
          github
          <ArrowSquareOutIcon size={15} weight="bold" />
        </span>
      </TitleDescription>
      <Description>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </Description>
    </DescriptionProfileContainer>
  );
};

export default DescriptionProfile;
