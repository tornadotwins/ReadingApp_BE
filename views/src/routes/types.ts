import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome,
  AdminPortal,
  Translator,
  BookOverview,
  JourneyOverview,
  ArticleOverview,
  ChapterOverview,
  AppTextOverview,
  AudioOverview,
  IntroOverview,
  Page2,
  Page3,
  Page4,
  NotFound,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
