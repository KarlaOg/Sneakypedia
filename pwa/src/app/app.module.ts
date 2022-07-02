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
import { AlertNotificationComponent } from './components/alert/alert.component'
import { AuthGuard } from './services/user/auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { ModalComponent } from './components/modal/modal.component';
import { SneakerFeatureModule } from './components/sneaker/sneaker-feature.module';
import { UserGuard } from './services/user/auth/user.guard';
import { UserDashboardFeatureModule } from './components/user-dashboard/user-dashboard-feature.module';

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
    AlertNotificationComponent,
    ModalComponent,
    
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
    SneakerFeatureModule,
    UserDashboardFeatureModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard, 
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
