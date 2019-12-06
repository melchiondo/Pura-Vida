import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPageComponent } from './components/productPage/productPage.component';
import { ProductPageSearchComponent } from './components/productPageSearch/productPageSearch.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BuyPageComponent } from './components/buyPage/buyPage.component';
import { BackendComponent } from './components/backend/backend.component';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productPage/:id', component: ProductPageComponent },
  { path: 'productPageSearch/:nombre', component: ProductPageSearchComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'buyPage/:id', component: BuyPageComponent },
  { path: 'backend', component: BackendComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
