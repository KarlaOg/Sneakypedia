import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SneakerAddComponent } from './sneaker-add/sneaker-add.component';
import { SneakerDetailsComponent } from './sneaker-details/sneaker-details.component';
import { SneakersListComponent } from './sneakers-list/sneakers-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SneakerModifyComponent } from './sneaker-modify/sneaker-modify.component';





@NgModule({
  declarations: [
    SneakerDetailsComponent,
    SneakersListComponent,
    SneakerAddComponent,
    SneakerModifyComponent

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
    SneakerAddComponent,
    SneakerModifyComponent,
  ]
})
export class SneakerFeatureModule { }
