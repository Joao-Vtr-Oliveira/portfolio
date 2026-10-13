import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Repo } from './repo/repo';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pt-BR' },
  { path: 'pt-BR', component: Home },
  { path: 'en', component: Home },
  { path: ':locale/repo/:repo', component: Repo },
  { path: '**', redirectTo: 'pt-BR' },
];
