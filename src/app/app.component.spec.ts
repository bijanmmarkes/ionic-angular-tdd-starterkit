import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';
import {NetworkProvider} from "../providers/network/network";
import {Network} from "@ionic-native/network";
import {ConfigProvider} from "../providers/config/config";
import {AuthProvider} from "../providers/auth/auth";
import { Toast } from "../controllers/toast/toast";
import {NetworkMock, ToastMock} from "ionic-mocks";

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(AppComponent)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: Toast, useClass: ToastMock },
        { provide: Network, useClass: NetworkMock},
        HttpClient,
        HttpClientModule,
        NetworkProvider,
        ConfigProvider,
        AuthProvider
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component instanceof AppComponent).toBe(true);
  });

  // it('root page should be tabs', () => {
  //   expect(component.rootPage).toBe(true);
  // });

});
