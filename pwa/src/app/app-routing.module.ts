import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './views/PageNotFoundComponent';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AccountComponent } from './components/user-dashboard/account/account.component';
import { AlertComponent } from './components/user-dashboard/alert/alert.component';
import { FavoritesComponent } from './components/user-dashboard/favorites/favorites.component';
import { NavUserDashboardComponent } from './components/user-dashboard/nav-user-dashboard/nav-user-dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  // {
  //   path: 'compte',
  //   component: AccountComponent,
  //   children: [
  //     {
  //       path:"alertes", 
  //       component: AlertComponent
  //     }, 
  //     {
  //       path:"favoris", 
  //       component:FavoritesComponent
  //     }
  //   ]
  // },
  {
    path: 'compte', component: NavUserDashboardComponent, canActivate : [],children: [
      {
        path: 'detail',
        component: AccountComponent,
      },
      {
        path: "alertes",
        component: AlertComponent
      },
      {
        path: "favoris",
        component: FavoritesComponent
      }
    ]
  },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
