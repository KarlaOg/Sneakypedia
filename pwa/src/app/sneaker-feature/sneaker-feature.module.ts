import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SneakerAddComponent } from '../components/sneaker/sneaker-add/sneaker-add.component';
import { SneakerDetailsComponent } from '../components/sneaker/sneaker-details/sneaker-details.component';
import { SneakersListComponent } from '../components/sneaker/sneakers-list/sneakers-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SneakerDetailsComponent,
    SneakersListComponent,
    SneakerAddComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  exports: [
    SneakersListComponent,
    SneakerDetailsComponent,
    SneakerAddComponent
  ]
})
export class SneakerFeatureModule { }
