import { Route } from '@angular/router';
import { GamesComponent } from '../games/components/games/games.component';

import { HomeComponent } from '../home/components/home/home.component';
import { LayoutComponent } from './components/layout.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
    ],
  },
];
