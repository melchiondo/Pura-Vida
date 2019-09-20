import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProducListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService, private router: Router) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    verProducto(id: number) {
        this.router.navigate(['/productPage', id]);
    }

    searchProduct(name: string) {
        console.log(this.productService.getProductSearched(name));
    }
}
