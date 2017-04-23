import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecureComponent }           from './secure.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SecureRoutingModule }       from './secure-routing.module';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
// Pagination Module - Third Party
import { NgxPaginationModule } from 'ngx-pagination';
// Translate
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    SecureRoutingModule,
    FormsModule,
    NgxPaginationModule,
    TranslateModule
  ],
  declarations: [
    SecureComponent,
    CustomerComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SortPipe,
    FilterPipe
  ]
})
export class SecureModule {}
