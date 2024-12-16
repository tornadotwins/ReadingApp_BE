import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/admin',
    title: 'Login',
    icon: HomeIcon,
  },
  [Pages.AdminPortal]: {
    component: asyncComponentLoader(() => import('@/pages/AdminPortal/AdminPortal')),
    path: '/admin/admin-portal',
    title: 'Admin Portal',
    icon: GitHubIcon,
  },
  [Pages.Translator]: {
    component: asyncComponentLoader(() => import('@/pages/Translator')),
    path: '/admin/translator',
    title: 'Translator Portal',
    icon: AddTaskIcon,
  },
  [Pages.BookOverview]: {
    component: asyncComponentLoader(() => import('@/pages/BookOverview')),
    path: '/admin/bookoverview',
    title: 'Book Overview',
  },
  [Pages.ChapterOverview]: {
    component: asyncComponentLoader(() => import('@/pages/ChapterOverview')),
    path: '/admin/chapteroverview',
    title: 'Chapter Overview',
  },
  [Pages.AppTextOverview]: {
    component: asyncComponentLoader(() => import('@/pages/AppTextOverview')),
    path: '/admin/apptext',
    title: 'App Text Overview',
  },
  [Pages.AudioOverview]: {
    component: asyncComponentLoader(() => import('@/pages/AudioOverview')),
    path: '/admin/audiooverview',
    title: 'Audio Overview',
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/Page2')),
    path: '/page-2',
    title: 'Page 2',
    icon: AddTaskIcon,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
