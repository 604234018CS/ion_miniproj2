import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {
  [x: string]: any;
  searchroom: any;
  searchnamroom: any;
  searchroomname(val: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }


    getcondominium(){
      const url = 'http://localhost/todoslim3/public/index.php/condominium';
      return this.http.get(url);
   }

    getapartment(){
      const url = 'http://localhost/todoslim3/public/index.php/apartment';
      return this.http.get(url);
    }

    getmansion(){
      const url = 'http://localhost/todoslim3/public/index.php/mansion';
      return this.http.get(url);
    }

    getdorm(){
      const url = 'http://localhost/todoslim3/public/index.php/dorm';
      return this.http.get(url);
    }

    searchrooms(query){
      let url  = 'http://localhost/todoslim3/public/index.php/search/'+query;
      return this.http.get(url);
    }

    loadprice_1(){
      let url ='http://localhost/todoslim3/public/index.php/room3000';
      return this.http.get(url);
    }
    //2500

    loadprice_2(){
      let url ='http://localhost/todoslim3/public/index.php/room3001';
      return this.http.get(url);
    }
    //3000
    
    loadprice_3(){
      let url ='http://localhost/todoslim3/public/index.php/room4000';
      return this.http.get(url);
    }

    loadrooms(){
      let url ='http://localhost/todoslim3/public/index.php/room';
      return this.http.get(url);
    }

    showroom(name_rentedroom){
      let url ='http://localhost/todoslim3/public/index.php/showroom/'+name_rentedroom;
      return this.http.get(url);
    }
}
