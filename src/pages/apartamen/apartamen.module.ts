import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApartamenPage } from './apartamen';

@NgModule({
  declarations: [
    ApartamenPage,
  ],
  imports: [
    IonicPageModule.forChild(ApartamenPage),
  ],
})
export class ApartamenPageModule {}
