import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Repo } from './repo/repo';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'repo/:repo', component: Repo},
  {path: '**', redirectTo: ''},
];
