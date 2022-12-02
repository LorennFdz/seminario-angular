import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellshopHomeComponent } from './cellshop-home/cellshop-home.component';
import { CellshopProductsComponent } from './cellshop-products/cellshop-products.component';
import { CellshopCategoriesComponent } from './cellshop-categories/cellshop-categories.component';
import { CellshopAboutComponent } from './cellshop-about/cellshop-about.component';
import { CellshopContactsComponent } from './cellshop-contacts/cellshop-contacts.component';

const routes: Routes = [
  {path: '', component: CellshopHomeComponent},
  {path: 'home', component: CellshopHomeComponent},
  {path: 'products', component: CellshopProductsComponent},
  {path: 'categories', component: CellshopCategoriesComponent},
  {path: 'about', component: CellshopAboutComponent},
  {path: 'contacts', component: CellshopContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
