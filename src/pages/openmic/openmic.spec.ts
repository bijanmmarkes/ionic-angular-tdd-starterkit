import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {ConfigProvider} from "../../providers/config/config";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenMicPage } from './openmic';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('OpenMic Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenMicPage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(OpenMicPage)
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
    fixture = TestBed.createComponent(OpenMicPage);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component instanceof OpenMicPage).toBe(true);
  });
});
