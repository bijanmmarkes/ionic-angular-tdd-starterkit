import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NetworkProvider } from "../providers/network/network";
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClient } from "@angular/common/http";
import { AuthProvider} from "../providers/auth/auth";
import fontawesome from "@fortawesome/fontawesome-pro";
import {HomePage} from "../pages/home/home";
@Component({
  selector: 'App',
  templateUrl: 'app.html',
  providers: [NetworkProvider]
})
export class AppComponent {
  @ViewChild(Nav) nav;
  rootPage:any = TabsPage;
  constructor(private Auth: AuthProvider, private http: HttpClient, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public network: NetworkProvider)
  {
    platform.ready().then(() => {
      //if (!this.Auth.isAuthenticated()) this.nav.setRoot(TabsPage,{});

      this.network.init();
      this.Auth.checkAuth();
      let t = this;
      //setTimeout(function(){ t.Auth.logout(); }, 5000)
     // else this.nav.setRoot(TabsPage,{});
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      setTimeout(function () {
        console.log(network.getStatus());
      }, 5000);
    });
  }
}
