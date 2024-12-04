import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {   path :'home' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/home/home.component').then((m) => m.HomeComponent)
         }
    },
    {   path :'details/:productId' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/product-detials/product-detials.component').then((m) => m.ProductDetialsComponent)
         }
    },
     
    {   path :'AddProduct' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/add-product/add-product.component').then((m) => m.AddProductComponent)
         }
    },

    {   path :'**' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
         }
    }
];
