import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './views/PageNotFoundComponent';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AccountComponent } from './components/user-dashboard/account/account.component';
import { InventoryComponent } from './components/user-dashboard/inventory/inventory.component';
import { FavoritesComponent } from './components/user-dashboard/favorites/favorites.component';
import { ProfileComponent } from './components/user-dashboard/profile/profile.component';
import { NavUserDashboardComponent } from './components/user-dashboard/nav-user-dashboard/nav-user-dashboard.component';
import { SneakersListComponent } from './components/sneaker/sneakers-list/sneakers-list.component';
import { SneakerDetailsComponent } from './components/sneaker/sneaker-details/sneaker-details.component'
import { AuthGuard } from './services/user/auth/auth.guard';
import { SneakerAddComponent } from './components/sneaker/sneaker-add/sneaker-add.component';
import { UserGuard } from './services/user/auth/user.guard';
import { SneakerModifyComponent } from './components/sneaker/sneaker-modify/sneaker-modify.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'connexion', component: LoginComponent, canActivate: [UserGuard] },
  { path: 'inscription', component: RegisterComponent, canActivate: [UserGuard] },
  { path: 'calendrier', component: CalendarComponent },
  { path: 'sneakers', component: SneakersListComponent },
  { path: 'sneakers/:id', component: SneakerDetailsComponent },
  { path: 'sneaker', component: SneakerAddComponent, canActivate: [AuthGuard] },
  { path: 'sneaker/:id', component: SneakerModifyComponent, canActivate: [AuthGuard] },
  {
    path: 'compte', component: NavUserDashboardComponent, canActivate: [AuthGuard], children: [
      { path: "profil", component: ProfileComponent },
      { path: 'modification', component: AccountComponent },
      { path: "inventaire", component: InventoryComponent },
      { path: "favoris", component: FavoritesComponent },
    ]
  },

  { path: '**', component: PageNotFoundComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
