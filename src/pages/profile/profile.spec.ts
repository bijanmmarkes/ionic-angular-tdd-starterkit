import { async, TestBed } from '@angular/core/testing';
import {  ModalController, IonicModule, Platform, NavController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {ConfigProvider} from "../../providers/config/config";
import {} from "@fortawesome/pro-solid-svg-icons";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { ProfilePage } from './profile';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('Profile Component', () => {
  let fixture;
  let component;
  let modalSpy, modalCtrlSpy, modalCtrl;
  beforeEach(async(() => {
    modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function () {
      return modalSpy;
    });
    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      imports: [
        IonicModule.forRoot(ProfilePage),
        HttpClientModule
      ],
      providers: [
        NavController,
        {provide: ModalController, useValue: modalCtrlSpy },
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock},
        AuthProvider,
        ConfigProvider,
        HttpClient,
        ProfilePage
      ]
    });
    modalCtrl = TestBed.get(ModalController);
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
  });
    it('Profile component should be created', () => {
        expect(component instanceof ProfilePage).toBe(true);
    });
    it("setEditable should set the editable variable to true", () => {
      component.setEditable();
      expect(component.editName).toEqual(true);
    });
});
