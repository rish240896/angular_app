import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

const routes: Routes = [
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {
        path:'company',
        component:AboutCompanyComponent
      },
      {
        path:'me',
        component:AboutMeComponent
      }
    ]
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
