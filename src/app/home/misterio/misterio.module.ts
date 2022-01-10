import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisterioPageRoutingModule } from './misterio-routing.module';

import { MisterioPage } from './misterio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisterioPageRoutingModule
  ],
  declarations: [MisterioPage]
})
export class MisterioPageModule {}
