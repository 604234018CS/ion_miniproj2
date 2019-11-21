import { VsroomPage } from './../pages/vsroom/vsroom';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PriceRoomPage } from '../pages/price-room/price-room';
import { TypeRoomPage } from '../pages/type-room/type-room';
import { LoaddataProvider } from '../providers/loaddata/loaddata';
import { RoomDetailPage } from '../pages/room-detail/room-detail';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
  TypeRoomPage,
  PriceRoomPage,
  RoomDetailPage,VsroomPage
  
 

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TypeRoomPage,
    PriceRoomPage,
    RoomDetailPage,VsroomPage
    

    
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider
  ]
})
export class AppModule {}
