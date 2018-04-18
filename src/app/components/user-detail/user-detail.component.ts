import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from "../../clazz/user";
import { MatDatepickerModule,
         MatFormFieldModule,
         MatInputModule,
         MatNativeDateModule
        } from '@angular/material';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
