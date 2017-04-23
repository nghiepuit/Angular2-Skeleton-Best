import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { PublicComponent }           from './public.component';
import { LoginComponent } from './components/login/login.component';
import { PublicRoutingModule }       from './public-routing.module';

// Translate
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    TranslateModule
  ],
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  providers: [],
})
export class PublicModule {}
