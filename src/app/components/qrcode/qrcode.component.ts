import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  fileURL: string ;
  customer: Customer;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
      //url for testing.
      this.fileURL = "assets/images/sqlitebrowser.png";
      this.dataService.getQRCodes().subscribe((retValue) => {

          console.log("post from qrcode.component ********" );
          this.customer = retValue;
          this.customer.id = retValue.id;
          this.customer.userName = retValue.name;
          this.customer.userPassword = retValue.password;
          this.customer.userEmail = retValue.email;
          this.customer.qrCodeImage = retValue.hash;
          this.customer.userAccountActivated = retValue.accountActivated;
          this.customer.modifyingUser = retValue.modifyingUser;
          this.customer.dateModified = retValue.dateModified;
          this.customer.userRole = retValue.role;

      });
  }
}

interface Customer {
  id: number;
  userName: string;
  userPassword: string;
  userEmail: string;
  qrCodeImage: any;
  userAccountActivated: boolean;
  modifyingUser: string;
  dateModified: string;
  userRole: string;
}
