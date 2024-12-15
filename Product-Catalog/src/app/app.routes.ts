import { Routes } from '@angular/router';

export const routes: Routes = [

    
    {   path :'' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/home/home.component').then((m) => m.HomeComponent)
         }
    },
    
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
    {   path :'edit/:productId' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/edit-product/edit-product.component').then((m) => m.EditProductComponent)
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
