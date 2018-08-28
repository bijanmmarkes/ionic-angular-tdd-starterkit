import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  constructor(private viewCtrl: ViewController, public auth: AuthProvider) {

  }
  public dismiss() {
    this.viewCtrl.dismiss();
  }
  public logout()
  {
    this.viewCtrl.dismiss();
    this.auth.logout();
  }
}
