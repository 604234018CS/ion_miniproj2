import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceRoomPage } from './price-room';

@NgModule({
  declarations: [
    PriceRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceRoomPage),
  ],
})
export class PriceRoomPageModule {}
