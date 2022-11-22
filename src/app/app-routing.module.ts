import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellshopAboutComponent } from './cellshop-about/cellshop-about.component';
import { CellshopHomeComponent } from './cellshop-home/cellshop-home.component';

const routes: Routes = [
  {path: '', component: CellshopHomeComponent},
  {path: 'home', component: CellshopHomeComponent},
  {path: 'about', component: CellshopAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
