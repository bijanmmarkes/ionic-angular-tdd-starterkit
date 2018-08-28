import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the EditProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfileComponent {

  constructor(private viewCtrl: ViewController, public auth: AuthProvider) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
