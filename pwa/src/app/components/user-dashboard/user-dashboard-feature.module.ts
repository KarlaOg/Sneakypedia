import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavUserDashboardComponent } from './nav-user-dashboard/nav-user-dashboard.component';



@NgModule({
  declarations: [
    AccountComponent,
    InventoryComponent,
    FavoritesComponent,
    NavUserDashboardComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AccountComponent,
    InventoryComponent,
    FavoritesComponent,
    NavUserDashboardComponent
  ]
})
export class UserDashboardFeatureModule { }
