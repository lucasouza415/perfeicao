import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeclientePageRoutingModule } from './homecliente-routing.module';

import { HomeclientePage } from './homecliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeclientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeclientePage]
})
export class HomeclientePageModule {}
