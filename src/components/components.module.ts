import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings';
import { EditProfileComponent } from './edit-profile/edit-profile';
@NgModule({
	declarations: [SettingsComponent,
    EditProfileComponent],
	imports: [],
	exports: [SettingsComponent,
    EditProfileComponent]
})
export class ComponentsModule {}
