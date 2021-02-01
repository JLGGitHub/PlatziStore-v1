import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'products', 
    component: ProductsComponent
  }, 
  {
    path: "products/:id", 
    component: DetailProductComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  }, 
  {
    path: '**', 
    pathMatch: 'full',
    redirectTo: 'home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
