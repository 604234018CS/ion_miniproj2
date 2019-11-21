import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFinishPage } from './login-finish';

@NgModule({
  declarations: [
    LoginFinishPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFinishPage),
  ],
})
export class LoginFinishPageModule {}
