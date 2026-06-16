import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Home, RouterModule.forChild(routes)],
})
export class LandingModule {}
