import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AuthInterceptor } from 'src/app/services/user/auth/auth.interceptor';
import { AccountComponent } from './components/user-dashboard/account/account.component';
import { AlertComponent } from './components/user-dashboard/alert/alert.component';
import { NavUserDashboardComponent } from './components/user-dashboard/nav-user-dashboard/nav-user-dashboard.component';
import { FavoritesComponent } from './components/user-dashboard/favorites/favorites.component';
import { AlertNotificationComponent } from './components/alert/alert.component'
import { AuthGuard } from './services/user/auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { ModalComponent } from './components/modal/modal.component';
import { SneakerFeatureModule } from './sneaker-feature/sneaker-feature.module';
<<<<<<< HEAD
=======
import { FilterByLabelPipe } from './filter-by-label.pipe';
import { SneakersListComponent } from './components/sneakers-list/sneakers-list.component';
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e

export function tokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    CalendarComponent,
    AccountComponent,
    AlertComponent,
    NavUserDashboardComponent,
    FavoritesComponent,
    AlertNotificationComponent,
    ModalComponent,
<<<<<<< HEAD
=======
    FilterByLabelPipe,
    SneakersListComponent,
>>>>>>> b3775c0246ce93907394adeb22dfaf1fb61cce5e
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains : ["http://localhost/api"],
        throwNoTokenError: true,
        skipWhenExpired: true,
      }
    }),
    SneakerFeatureModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
