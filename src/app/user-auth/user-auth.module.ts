import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    FooterComponent,
  ]
})
export class UserAuthModule { }
