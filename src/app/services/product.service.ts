import { Injectable } from '@angular/core';

import products from '../data/products';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = products;

    constructor() {}

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products[id];
    }

    getProductSearched(name: string): Product {
        // for (let product of this.products) {
        //     let searched = product.nombre.toLowerCase();
        //     if (searched === name) {
        //         return product;
        //     }
        // }
        return this.getProducts().filter(finded => finded.nombre.toLowerCase() === name.toLowerCase())[0];
    }

    buscarProductos(termino: string): Product[] {
        const productsArray: Product[] = [];
        termino = termino.toLowerCase();
        for (const product of this.products) {
            const prod = product.nombre.toLowerCase();
            if (prod.indexOf(termino) >= 0) {
                productsArray.push(product);
            }
        }
        return productsArray;
    }
}
