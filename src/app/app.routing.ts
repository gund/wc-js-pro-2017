/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  // { path: '', component: null, pathMatch: 'full' },
  { path: '**', component: NotFound404Component }
];
