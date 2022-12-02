import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellshopAboutComponent } from './cellshop-about/cellshop-about.component';
import { CellshopHomeComponent } from './cellshop-home/cellshop-home.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { CellshopProductsComponent } from './cellshop-products/cellshop-products.component';
import { CellshopCategoriesComponent } from './cellshop-categories/cellshop-categories.component';
import { CellshopContactsComponent } from './cellshop-contacts/cellshop-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CellshopAboutComponent,
    CellshopHomeComponent,
    CartComponent,
    InputIntegerComponent,
    CellshopProductsComponent,
    CellshopCategoriesComponent,
    CellshopContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
