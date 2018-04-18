import { Component, OnInit, Input } from '@angular/core';
import { MatDatepickerModule,
         MatFormFieldModule,
         MatInputModule,
         MatNativeDateModule,
         MatSelectModule  } from '@angular/material';
import { DatePipe } from '@angular/common';
import { User } from "../../clazz/user";
import { UserProfile } from "../../clazz/user-profiles";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

@Input() userProfile: UserProfile;


  constructor() { }

  ngOnInit() {
  }

}
