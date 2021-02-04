import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './modules/contact/components/contact.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'home', 
        loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'products', 
        loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule)
      },
     
    
    ]
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
