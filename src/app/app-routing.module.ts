import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { TestErrorsComponent } from './test-errors/test-errors.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./accout/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  { path: 'test-errors', component: TestErrorsComponent },
  { path: 'not-found', component: NotFoundErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
