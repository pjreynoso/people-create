import { lazyImport } from '../utils';
import { RouteObject, Navigate } from 'react-router-dom';

const { Main } = lazyImport(() => import('../features'), 'Main');

export const MainRoutes: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      path: 'main',
      element: <Main />,
    }, 
    {
      index: true,
      element: <Navigate to="main" replace />,
    },
  ],
};