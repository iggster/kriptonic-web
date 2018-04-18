import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatButtonToggleModule,
         MatDatepickerModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatNativeDateModule,
         MatSelectModule,
         MatSnackBarModule,
         MatSidenavModule,
         MatToolbarModule

        } from '@angular/material';


import { AppComponent } from './app.component';
import { DataService} from "./services/data.service";
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { QrcodeComponent } from "./components/qrcode/qrcode.component"
import { TrialsComponent} from "./components/trials/trials.component"
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const appRoutes: Routes = [
  { path: 'app-user-detail', component: UserDetailComponent },
  { path: 'app-qrcode', component: QrcodeComponent },
  { path: 'app-user', component: UserComponent },
  { path: 'app-trials', component: TrialsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftPanelComponent,
    QrcodeComponent,
    TrialsComponent,
    UserComponent,
    UserDetailComponent,
    UserProfileComponent
  ],
  imports: [

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule
  ],

  exports: [FlexLayoutModule, MatSidenavModule, DatePipe],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
