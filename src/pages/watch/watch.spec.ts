import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {ConfigProvider} from "../../providers/config/config";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { WatchPage } from './watch';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('Watch Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchPage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(WatchPage)
      ],
      providers: [
        HttpClient,
        NavController,
        AuthProvider,
        ConfigProvider,
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock}
      ]
    })
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WatchPage);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component instanceof WatchPage).toBe(true);
  });
});
