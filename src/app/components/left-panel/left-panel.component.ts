import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  showFiller = false;
  constructor() {
    console.log('LeftPanelComponent constructor');
  }

  ngOnInit() {
    console.log('LeftPanelComponent ngOnInit');
  }

  getQRCode() {
    console.log('Getting QRCode');
    
  }

}
