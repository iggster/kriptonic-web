import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import  "rxjs/add/operator/map";


@Injectable()
export class DataService {

  constructor( public http: Http ) {
   console.log('Data service connected. . .');
  }

  deleteUserById(id) {
    console.log('User Id to delete: '+id);
    return this.http.get('http://localhost:8080/kriptonic-server/user/deletebyid/'+id)
       .map( res => res.json());
  }
  getQRCodes() {
    console.log('Getting qrs ********');
    return this.http.get('http://localhost:8080/kriptonic-server/usersave')
    .map( res => res.json());
  }
  findUserById(id) {
    return this.http.get('http://localhost:8080/kriptonic-server/user/findbyid/', id)
    .map( res => res.json());
  }
  getUserProfiles() {
     return this.http.get('http://localhost:8080/kriptonic-server/user/profile/profiles')
     .map( res => res.json());
  }
  getUsers() {
    console.log("Getting the users.");
    return this.http.get('http://localhost:8080/kriptonic-server/user/findall')
    .map( res => res.json());
  }
  saveUser(user) {
    console.log("Saving the user: "+user);
    return this.http.post('http://localhost:8080/kriptonic-server/user/save',user);
    //.map( res => res.json());
  }

  newUser(user) {
    console.log("Saving the user: "+user);
    return this.http.post('http://localhost:8080/kriptonic-server/user/new',user);
    //.map( res => res.json());
  }


}
