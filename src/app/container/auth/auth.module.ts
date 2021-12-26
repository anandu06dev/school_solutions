import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    LoginformComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatButtonModule,
    HotToastModule.forRoot()
  ],
})
export class AuthModule {}
