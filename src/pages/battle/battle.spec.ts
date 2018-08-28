import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BattlePage } from './battle';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('Battle Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BattlePage],
      imports: [
        IonicModule.forRoot(BattlePage)
      ],
      providers: [
        NavController,
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock}
      ]
    })
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePage);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component instanceof BattlePage).toBe(true);
  });
});
