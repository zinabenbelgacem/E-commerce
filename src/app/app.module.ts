import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesModule } from './categories/categories.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { ScategoriesModule } from './scategories/scategories.module';
import { FilePondModule } from 'ngx-filepond';
import { AuthentificationModule } from'./authentification/authentification.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, 
    ],
  imports: [
    RouterModule,
    ShoppingCartModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule, 
    ProductsModule,
    ScategoriesModule,
    CategoriesModule,
    FormsModule,
    FilePondModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
