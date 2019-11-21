import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CondominiumPage } from './condominium';

@NgModule({
  declarations: [
    CondominiumPage,
  ],
  imports: [
    IonicPageModule.forChild(CondominiumPage),
  ],
})
export class CondominiumPageModule {}
