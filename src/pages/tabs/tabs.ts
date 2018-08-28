import { Component } from '@angular/core';
import { WatchPage } from '../watch/watch';
import { BattlePage } from '../battle/battle';
import { OpenMicPage } from '../openmic/openmic';
import { ProfilePage } from '../profile/profile';
import { ViewChild} from "@angular/core";
import {Tabs, Tab, App} from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import {HomePage} from "../home/home";

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs',
})
export class TabsPage {
  @ViewChild('MainTabs') tabRef: Tabs;
  public activeTab:Tab;
  tab1Root = WatchPage;
  tab2Root = BattlePage;
  tab3Root = OpenMicPage;
  tab4Root = ProfilePage;
  public onTabsChange() {
    let selectedTab = this.tabRef.getSelected();
    this.activeTab = selectedTab;
  }
  constructor(public auth: AuthProvider, public app: App) {
  }
  ionViewDidLoad()
  {
    if (!this.auth.isAuthenticated())
    {
      // Allow the timeout function to have this as variable
      let a:any = this;
      // This is mainly here to catch a successful authentication.
      if (!a.auth.isAuthenticated() && !a.auth.lock)
      {
        // init a Lock phantom to get the authResult
        a.auth.initLockPhantom();
      }

    }
  }
  public initLogin()
  {
    this.app.getRootNav().setRoot(HomePage);
  }
}
