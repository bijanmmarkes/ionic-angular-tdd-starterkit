import { NgModule } from '@angular/core';
import {IonicPageModule, Nav} from 'ionic-angular';
import { HomePage } from './home';
import {AppComponent} from "../../app/app.component";

@NgModule({
  declarations: [
    HomePage,
  ],
  exports: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage
  ],
  providers: [Nav]
})
export class HomePageModule {}
