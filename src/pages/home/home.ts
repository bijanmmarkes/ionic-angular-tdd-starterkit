import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Nav, Platform, App} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav;
  skipTo: any = null;
  init:boolean = false;
  clickTimeout: number = 500;
  disabled:boolean = true;
  constructor(public platform: Platform, public app: App, public navParams: NavParams, public auth: AuthProvider, public navCtrl: NavController) {
  }
  public skipLogin()
  {
    if (!this.disabled) this.app.getRootNav().setRoot(TabsPage);
  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      if (this.skipTo) clearTimeout(this.skipTo);
      this.skipTo = setTimeout(() =>
      {
        this.disabled = false;
      }, this.clickTimeout);
      if (!this.auth.isAuthenticated()) {
        // Allow the timeout function to have this as variable
        let a: any = this;
        // Small timeout required or displays
        // "Cannot find id root when trying it init
        // the login page after a logout redirect.
        setTimeout(() =>
        {
          this.init = true;
          a.auth.init();
        }, 100);

      }
    });
  }
  ionViewDidLeave() {
    this.init = false;
  }
}
