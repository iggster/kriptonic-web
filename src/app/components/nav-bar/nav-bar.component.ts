import { Component, OnInit } from '@angular/core';
import { Type } from '@angular/core';

import { MatButtonModule,
         MatIconModule,
         MatInputModule,
         MatMenuModule,
         MatToolbarModule

        } from '@angular/material';






@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})



export class NavBarComponent implements OnInit {

  navBarMenuItemArray:NavBarMenuItem[];
  navMenuItemSelectedTitle:string;
  clickCount:number;
  currentSelection: String;

  constructor() { }

  ngOnInit() {
/*    this.navBarMenuItemArray = [{label: "QRCode", routingDirection:"route1"},
                                {label:"Database", routingDirection:"route2"}];
    this.clickCount = 0;          */
  }

  navMenuItemSelected() {
    this.clickCount = this.clickCount + 1;
  }

  setCurrentSelection(currentSelection) {
    this.currentSelection = currentSelection;
    console.log("currentSelection");
  }

}

interface NavBarMenuItem{
  label:string;
  routingDirection:string;
}
