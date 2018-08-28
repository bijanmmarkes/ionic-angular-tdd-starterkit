import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Nav} from 'ionic-angular';
import { AppComponent } from './app.component';
import { BattlePage } from '../pages/battle/battle';
import { OpenMicPage } from '../pages/openmic/openmic';
import { WatchPage } from '../pages/watch/watch';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { Toast } from "../controllers/toast/toast";
import { AuthProvider } from '../providers/auth/auth';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "../pages/home/home";
import { AppRouter } from './app-routing.module';
import {HomePageModule} from "../pages/home/home.module";
import {SettingsComponent} from "../components/settings/settings";
import {EditProfileComponent} from "../components/edit-profile/edit-profile";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    WatchPage,
    BattlePage,
    OpenMicPage,
    ProfilePage,
    TabsPage,
    SettingsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    HttpClientModule,
    HomePageModule,
    FontAwesomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    WatchPage,
    BattlePage,
    OpenMicPage,
    ProfilePage,
    TabsPage,
    SettingsComponent,
    EditProfileComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    NetworkProvider,
    Network,
    HttpClient,
    HttpClientModule,
    Toast,
    Nav,
    AuthProvider
  ]
})
export class AppModule {}
