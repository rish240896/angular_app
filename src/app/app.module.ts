import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { UsdToinrPipe } from './pipes/usd-toinr.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { RedElDirective } from './directives/red-el.directive';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdToinrPipe,
    RedElDirective,
    UserComponent,
    HomeComponent,
    AboutComponent,
    ErrorPageComponent,
    AboutCompanyComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
