import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

//Services
import { ProductsService } from './services/products.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPageComponent } from './components/productPage/productPage.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductPageSearchComponent } from './components/productPageSearch/productPageSearch.component';
import { TarjetaProductoComponent } from './components/tarjetaProducto/tarjetaProducto.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BuyPageComponent } from './components/buyPage/buyPage.component';
import { FilterNavComponent } from './components/shared/filterNav/filterNav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductPageComponent,
    BuscadorComponent,
    ProductPageSearchComponent,
    TarjetaProductoComponent,
    FooterComponent,
    BuyPageComponent,
    FilterNavComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
