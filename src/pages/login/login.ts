import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata:any = {};


  constructor(public navCtrl: NavController, public http:Http, public HttpClientModule:HttpClientModule) {
    this.logindata.username = "";
    this.logindata.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  
  
  SingIn(){
    if(this.logindata.username != ""&& this.logindata.password != ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      let url : string = "http://localhost/rented/login.php";
      let dataPost = JSON.stringify({
                            user:this.logindata.username,
                            pass:this.logindata.password,
      });

      this.http.post(url,dataPost).subscribe(data =>{

      });

    }else{
      console.log("Enter Password");
    }
  }

  SingUp(){
    this.navCtrl.push("SingUpPage");
  }
}

