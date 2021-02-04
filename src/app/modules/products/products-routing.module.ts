import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ":id",
        component: DetailProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
