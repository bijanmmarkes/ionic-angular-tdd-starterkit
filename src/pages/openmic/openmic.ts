import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-openmic',
  templateUrl: 'openmic.html'
})
export class OpenMicPage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }
}
