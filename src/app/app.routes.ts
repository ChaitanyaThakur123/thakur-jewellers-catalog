import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CategoryComponent } from './pages/category/category';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery/:section/:category',
    component: CategoryComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];