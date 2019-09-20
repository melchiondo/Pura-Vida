import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { ProductService } from './services/product.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProducListComponent } from './components/product-list/product-list.component';

@NgModule({
    imports: [BrowserModule, APP_ROUTING],
    declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, ProducListComponent],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}
