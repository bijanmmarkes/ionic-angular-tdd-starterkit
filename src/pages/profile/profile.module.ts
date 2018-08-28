import {IonicPageModule} from "ionic-angular";
import {ProfilePage} from "./profile";
import { NgModule, ErrorHandler } from '@angular/core';
import {EditProfileComponent} from "../../components/edit-profile/edit-profile";
import {SettingsComponent} from "../../components/settings/settings";
@NgModule({
  declarations: [
    ProfilePage,
    EditProfileComponent,
    SettingsComponent
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage)
  ],
  entryComponents: [
    ProfilePage,
    EditProfileComponent,
    SettingsComponent
  ]
})
export class ProfilePageModule {}
