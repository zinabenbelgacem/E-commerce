import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
declarations: [
LoginComponent,
LogoutComponent,
RegisterComponent,
MenuComponent
],
imports: [
CommonModule,
AuthentificationRoutingModule,
FormsModule,
]
})
export class AuthentificationModule { }