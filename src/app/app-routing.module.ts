import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { GetAdminComponent } from './admin/get-admin/get-admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthComponent ,
  children: [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent }
  ] },
  { path: 'admin', component: AdminComponent ,
children: [
    { path: 'getAdmin', component: GetAdminComponent },
    { path: 'addAdmin', component: AddAdminComponent }
]},
  { path: 'user', component: UserComponent ,
  children: [
    { path: 'getuser', component: AddUserComponent },
    { path: 'adduser', component: GetUserComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
