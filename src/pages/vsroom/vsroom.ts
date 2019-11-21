import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-vsroom',
  templateUrl: 'vsroom.html',
})
export class VsroomPage {
  result:any=[];
  value;
  showroom1:any=[];
  showroom2:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public key:LoaddataProvider) {
    this.result.room1 ="";
    this.result.room2 ="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
    this.key.loadrooms().subscribe(data=>{
      this.value = data;
    });
  }

  getRoomview(){
    if(this.result.room1 != ""){
      this.key.showroom(this.result.room1).subscribe(data=>{
        this.showroom1 = data;
        console.log(this.showroom1);
      });
    }
    if(this.result.room2 != ""){
      this.key.showroom(this.result.room2).subscribe(data=>{
        this.showroom2 = data;
        console.log(this.showroom2);
      });
    }
  }
}
