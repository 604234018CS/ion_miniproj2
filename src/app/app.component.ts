import { VsroomPage } from './../pages/vsroom/vsroom';

import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TypeRoomPage } from '../pages/type-room/type-room';
import { PriceRoomPage } from '../pages/price-room/price-room';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen) {
    this.initializeApp();

    this.pages = [
    
      { title: 'Home', component: HomePage},
      { title: 'ลงชื่อเข้าใช้', component: LoginPage},
      {title: 'ประเภทห้องเช่า', component: TypeRoomPage},
      {title: 'เปรียบเทียบราคาห้อง', component: VsroomPage},
      

    ];
    }
    
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
}