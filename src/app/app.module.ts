import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ProductPageComponent,
        BuscadorComponent,
        ProductPageSearchComponent
    ],
    imports: [BrowserModule, APP_ROUTING],
    providers: [ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
