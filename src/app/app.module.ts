import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// Module
import { AppRoutingModule } from './app-routing.module';
// Third-Party Module
import { TranslateModule, MissingTranslationHandler, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MyMissingTranslationHandler } from './missingtemplate.component';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot(
      { 
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    )
  ],
  providers: [
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
