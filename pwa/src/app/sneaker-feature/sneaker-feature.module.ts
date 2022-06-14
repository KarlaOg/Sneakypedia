import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SneakerDetailsComponent } from '../components/sneaker/sneaker-details/sneaker-details.component';
import { SneakersListComponent } from '../components/sneaker/sneakers-list/sneakers-list.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SneakerDetailsComponent,
    SneakersListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ], 
  exports:[
    SneakersListComponent,
    SneakerDetailsComponent
  ]
})
export class SneakerFeatureModule { }
