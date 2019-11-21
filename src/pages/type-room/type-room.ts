import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TypeRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-room',
  templateUrl: 'type-room.html',
})
export class TypeRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeRoomPage');
  }

  Condominium()
  {
    this.navCtrl.push("CondominiumPage");
  }

  Apartamen()
  {
    this.navCtrl.push("ApartamenPage");
  }

  Mansion()
  {
    this.navCtrl.push("MansionPage");
  }

  Dorm()
  {
    this.navCtrl.push("DormPage");
  }



  
}
