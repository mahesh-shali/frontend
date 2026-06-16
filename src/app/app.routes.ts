import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { DashboardLayout } from './core/layouts/dashboard-layout/dashboard-layout';
import { PublicLayout } from './core/layouts/public-layout/public-layout';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/landing/landing-module').then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/auth/auth-module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: Dashboard,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
