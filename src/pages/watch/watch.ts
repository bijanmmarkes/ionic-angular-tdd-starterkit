import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html'
})
export class WatchPage {

  constructor(public navCtrl: NavController, public auth:AuthProvider, public app: App) {
    //if (!this.auth.isAuthenticated()) this.app.getRootNav().setRoot("HomePage");
  }

}
