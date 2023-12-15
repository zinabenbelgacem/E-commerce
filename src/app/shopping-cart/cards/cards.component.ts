import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories } from 'src/app/categories/categories';
import { Products } from 'src/app/products/products';
import { ProductsService } from 'src/app/products/products.service';
import { Scategories } from 'src/app/scategories/scategories';
@Component({
selector: 'app-cards',
templateUrl: './cards.component.html',
styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
products: Products[] = [];
categories: Categories[] =[];
scategories: Scategories[] =[];
productOrders : any[]= [];
@Output() productAdded = new EventEmitter();

addProductToCart(product:any) {
this.productAdded.emit(product);
}

constructor(private prodserv:ProductsService) {}
ngOnInit() {
this.loadProducts();
}

loadProducts() {
this.prodserv.getAll()
.subscribe({
next: (products: any) => {
this.products = products;

this.products.forEach(product => {
this.productOrders.push({product:product,quantity:0});
})
},
error: (e) => {
console.log(e);
},
});
}
}