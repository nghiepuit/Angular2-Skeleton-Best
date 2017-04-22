import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureComponent }           from './secure.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';

const secureRoutes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: '',   redirectTo: '/admin/users', pathMatch: 'full' },
      {
        path: '',
        children: [
          { path: 'users', component: UserComponent },
          { path: '', component: UserComponent }
        ]
      },
      {
        path: '',
        children: [
          { path: 'customers', component: CustomerComponent },
          { path: '', component: CustomerComponent }
        ]
      },
      { path: '' , component: HeaderComponent, outlet: 'header'},
      { path: '' , component: FooterComponent, outlet: 'footer'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(secureRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SecureRoutingModule {}
