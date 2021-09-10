import { IconName } from 'types';

export type LinkType = {
  name: string,
  link: string,
};

export type IconLinkType = {
  icon: IconName,
  link: string,
  adjustLeft?: boolean,
  adjustRight?: boolean,
};
