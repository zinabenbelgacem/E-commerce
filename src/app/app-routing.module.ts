import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './products/index/index.component';
import { CategoriesService } from './categories/categories.service';
import { CategoriesComponent } from './categories/index/index.component';
import { ScategoriesComponent } from './scategories/index/index.component';
import { LoginComponent } from './authentification/login/login.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { RegisterComponent } from './authentification/register/register.component';
import { MenuComponent } from './authentification/menu/menu.component';
import { LogoutComponent } from './authentification/logout/logout.component';



const routes: Routes = [
  {path:'products',component:IndexComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'scategories',component:ScategoriesComponent},
  { path: 'ecommerce/login', component: LoginComponent },
  { path: 'ecommerce/register', component: RegisterComponent },
  { path: 'ecommerce/logout', component: LogoutComponent },
  { path: 'menu', component: MenuComponent, children: [
    { path: 'products', component: IndexComponent },
  {path:'categories',component:CategoriesComponent},

  {path:'scategories',component:ScategoriesComponent},
 
]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
