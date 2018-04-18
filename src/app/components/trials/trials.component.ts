import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.scss']
})
export class TrialsComponent implements OnInit {

  fileURL: string ;

  constructor() { }

  ngOnInit() {
      this.fileURL = "assets/images/sqlitebrowser.png";
  }

}
