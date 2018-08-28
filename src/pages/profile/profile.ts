import { Component } from '@angular/core';
import {App, IonicPage, ModalController, Nav, Platform} from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import {ViewChild} from "@angular/core";
import {SettingsComponent} from "../../components/settings/settings";
import {EditProfileComponent} from "../../components/edit-profile/edit-profile";
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  editName: boolean = false;
  posts:any;
  @ViewChild(Nav) nav;
  constructor(public auth: AuthProvider, public platform: Platform, public modalCtrl: ModalController, app: App) {
    this.platform.ready().then(() => {
    });
  }
  public setEditable = function()
  {
    this.editName = true;
  };
  public presentSettingsModal = function()
  {
    let settingsModal = this.modalCtrl.create(SettingsComponent, { userId: 8675309 });
    settingsModal.present();
  };
  public presentEditProfileModal()
  {
    let EditProfileModal = this.modalCtrl.create(EditProfileComponent, { userId: 8675309 });
    EditProfileModal.present();
  }
}
