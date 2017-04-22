import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { PublicComponent }           from './public.component';
import { LoginComponent } from './components/login/login.component';
import { PublicRoutingModule }       from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    LoginComponent
  ]
})
export class PublicModule {}
