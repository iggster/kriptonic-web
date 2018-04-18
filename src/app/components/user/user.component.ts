import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatButtonToggleModule,
         MatListModule,
         MatIconModule,
         MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { User } from "../../clazz/user";
import { UserProfile } from "../../clazz/user-profiles";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  fileURL: string;
  user: User;
  selectedUser: User;
  users: User[];
  userProfiles: UserProfile[];
  userProfileId: number;
  returnCode: String;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Subscribe observer to dataService.
    this.dataService.getUsers().subscribe((retValue) => {
        console.log("User Component DataService. Get users * * *" );
        this.users = retValue;
        this.selectedUser = this.users[0];
    });
  }

    onSelectUser(user) {
       this.selectedUser = user;
    }

  /**
   * Save by two-way data binding.
  **/
  saveUser() {
     this.dataService.saveUser(this.selectedUser).subscribe((retValue) => {
          console.log(retValue);
     });
    return false;
  }

   deleteUserById() {
     this.dataService.deleteUserById(this.selectedUser.id).subscribe((retValue) => {

       var str: string = retValue;
       var comparisonStr: string = "Deleted OK";;
       var index: number = 0;

       if( str === comparisonStr ) {

          for(let currentUser of this.users) {
             if(this.selectedUser === currentUser) {
                console.log("Matched deleted user.")
             }
          }
        }
          //Used to get body from retValue.
    //      console.log(JSON.stringify(retValue));
        //console.log(retValue);
     });
   }
}
