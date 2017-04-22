import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { NotFoundComponent }    from './shared/components/not-found/not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: 'app/secure/secure.module#SecureModule',
  },
  {
    path: 'login',
    loadChildren: 'app/public/public.module#PublicModule',
    data: { preload: true }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
