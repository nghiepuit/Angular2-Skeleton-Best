import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent }           from './public.component';
import { LoginComponent } from './components/login/login.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'login', component: LoginComponent },
          { path: '', component: LoginComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PublicRoutingModule {}
