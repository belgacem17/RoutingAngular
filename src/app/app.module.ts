import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { GetAdminComponent } from './admin/get-admin/get-admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AuthComponent,
    GetAdminComponent,
    AddAdminComponent,
    AddUserComponent,
    GetUserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
