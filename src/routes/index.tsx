import { MainRoutes } from './PrivateRoutes';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  return useRoutes([MainRoutes]);
};