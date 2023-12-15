import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from '../products/index/index.component';
import { CategoriesComponent } from '../categories/index/index.component';
import { ScategoriesComponent } from '../scategories/index/index.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent },

{ path: 'register', component: RegisterComponent },

{ path: 'logout', component: LogoutComponent },

{ path: 'menu', component: MenuComponent, children: [
    { path: 'products', component: IndexComponent },
  {path:'categories',component:CategoriesComponent},

  {path:'scategories',component:ScategoriesComponent},
  { path: 'logout', component: LogoutComponent },
]
},
]
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthentificationRoutingModule { }