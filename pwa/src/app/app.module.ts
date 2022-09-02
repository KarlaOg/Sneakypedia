import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AuthInterceptor } from 'src/app/services/user/auth/auth.interceptor';
import { AuthGuard } from './services/user/auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { SneakerFeatureModule } from './components/sneaker/sneaker-feature.module';
import { UserGuard } from './services/user/auth/user.guard';
import { UserDashboardFeatureModule } from './components/user-dashboard/user-dashboard-feature.module';
import { FooterComponent } from './views/footer.component';
import { AddSneakerButton } from './views/addSneakerButton.component';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './services/loader/interceptor/loading.interceptor';

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
    FooterComponent,
    AddSneakerButton,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.API_PLATFORM_URL],
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
    UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }