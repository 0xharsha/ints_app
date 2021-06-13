//Styped
import { RoutesType } from '../../types';
import Home from './containers/';

const homeRoutes: RoutesType[] = [
  {
    path: '/',
    component: Home,
    key: 'home',
  }
];

export default homeRoutes;
