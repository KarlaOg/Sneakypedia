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
import { SneakersListComponent } from './components/sneaker/sneakers-list/sneakers-list.component';
import { SneakerDetailsComponent } from './components/sneaker/sneaker-details/sneaker-details.component';
import { AuthGuard } from './services/user/auth/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'sneakers', component: SneakersListComponent },
  { path: 'sneakers/:id', component: SneakerDetailsComponent },
  {
    path: 'compte', component: NavUserDashboardComponent, canActivate: [AuthGuard], children: [
      { path: 'detail', component: AccountComponent },
      { path: "alertes", component: AlertComponent },
      { path: "favoris", component: FavoritesComponent }
    ]
  },

  { path: '**', component: PageNotFoundComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
