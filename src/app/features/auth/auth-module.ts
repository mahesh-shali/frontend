import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Login, Register, RouterModule.forChild(routes)],
})
export class AuthModule {}
