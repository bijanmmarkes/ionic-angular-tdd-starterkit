import { HttpClient } from '@angular/common/http';
import {Injectable, NgZone, ViewChild} from '@angular/core';
import { ConfigProvider } from "../config/config";
import {App, NavController, Platform} from "ionic-angular";
import { TabsPage } from "../../pages/tabs/tabs";
import Auth0Cordova from '@auth0/cordova';
// import { Auth0PluginCordova } from '@saphocom/auth0-plugin-cordova';
import {Auth0Lock} from 'auth0-lock';
import { Deeplinks } from '@ionic-native/deeplinks';
import { RouterModule, Routes } from '@angular/router';
import * as auth0 from 'auth0-js';
import { HomePage } from "../../pages/home/home";

/*
  Generated class for the AuthProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AuthProvider {
  auth0: any;
  loggedIn:boolean = false;
  // auth0 = new Auth0.WebAuth(AUTH_CONFIG);
  auth0Config:any;
  accessToken: string;
  idToken: string;
  user: any;
  auth0Cordova:any;
  webAuth:any;
  loaded:any = false;
  public lock:any;
  constructor(public platform: Platform, public http: HttpClient, public app: App, public ngZone: NgZone,
              public c: ConfigProvider) {

    this.user = this.getStorageVariable('profile');
    this.idToken = this.getStorageVariable('id_token');
    this.auth0Config = this.c.auth0;
    platform.ready().then(() => {

    });
  }

  public intentHandler(url) {
    Auth0Cordova.onRedirectUri(url);
  }
  private getStorageVariable(name) {
    return JSON.parse(window.localStorage.getItem(name));
  }

  private setStorageVariable(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  private setIdToken(token) {
    this.idToken = token;
    this.setStorageVariable('id_token', token);
  }
  private setAccessToken(token) {
    this.accessToken = token;
    this.setStorageVariable('access_token', token);
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }
  /*
    Initialize the authorization variables such as:
    loggedIn:boolean
      - Whether or not an active session is enabled and the user is logged in.
  */
  public lockHandler()
  {
    console.log("Lock handler");
    let t:any = this;
    // Listen for the authenticated event and get profile
    this.lock.on("authenticated", function(authResult) {
      console.log("authed");
      t.setIdToken(authResult.idToken);
      t.setAccessToken(authResult.accessToken);
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      t.setStorageVariable('expires_at', expiresAt);
      console.log("Eppresat:" + expiresAt);
      t.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (!error) {
          profile.user_metadata = profile.user_metadata || {};
          t.setStorageVariable('profile', profile);
          t.ngZone.run(() => {
            t.user = profile;
          });
        }

      });
        console.log("SUCCESS! " + authResult.accessToken);
        // Save token and profile locally
        localStorage.setItem("accessToken", authResult.accessToken);

        console.log(localStorage.getItem("profile"));
      //
      //   // Update DOM
      // });
      console.log("authed!!!");
      t.app.getRootNav().setRoot(TabsPage);
    });
  }
  public initLock()
  {
    const options = {
      container: this.auth0Config.Lock.container,
      configurationBaseUrl: this.auth0Config.Lock.configurationBaseUrl,
      socialButtonStyle: this.auth0Config.Lock.socialButtonStyle,
      theme: {
        // logo used for login modal
        logo: this.auth0Config.Lock.theme.logo,
        // Color theme used for login button, etc.
        primaryColor: this.auth0Config.Lock.primaryColor
      },
      languageDictionary: {
        signUpTerms: this.auth0Config.Lock.languageDictionary.signUpTerms,
        title: this.auth0Config.Lock.languageDictionary.title
      },
      // plugins: [new Auth0PluginCordova()],
      mustAcceptTerms: this.auth0Config.Lock.mustAcceptTerms,
      allowShowPassword: this.auth0Config.Lock.allowShowPassword,
      autofocus: this.auth0Config.Lock.autofocus,
      avatar: this.auth0Config.Lock.avatar,
      rememberLastLogin: this.auth0Config.Lock.rememberLastLogin,
      auth: {
        // redirect: this.auth0Config.Lock.auth.redirect,
        // If not specified, defaults to the current page
        redirectUrl: "http://localhost:8100/#/home/#",
        responseType: this.auth0Config.Lock.auth.responseType,
        params: {
          // Learn about scopes: https://auth0.com/docs/scopes
          scope: this.auth0Config.Lock.auth.params.scope
        },
        // assetsUrl:  config.assetsUrl,
        // allowedConnections: connection ? [connection] : null,
        rememberLastLogin: !prompt,
        // language: language,
        // languageDictionary: languageDictionary,
        // prefill: loginHint ? { email: loginHint, username: loginHint } : null,
        closable: this.auth0Config.Lock.closable,
        defaultADUsernameFromEmailPrefix: this.auth0Config.Lock.defaultADUsernameFromEmailPrefix
      },
      additionalSignUpFields: [
        {
          name: "full_name",
          placeholder: "Enter your full name"
        },
        {
          name: "dob",
          placeholder: "Date of birth",
          validator: function(dob) {
            return {
              valid: dob.length >= 5,
              hint: "Must be a valid DOB" // optional
            };
          }
        }]
    };

    this.lock = new Auth0Lock("2lfSYCcV0G1rFXA70bP2on6DwaIloAqd", this.auth0Config.Lock.domain, options);
    this.lockHandler();
    this.lock.show();
  }
  public initLockPhantom()
  {
    this.lock = new Auth0Lock("2lfSYCcV0G1rFXA70bP2on6DwaIloAqd", this.auth0Config.Lock.domain);
    this.lockHandler();
  }
  public initWebAuth()
  {
    this.webAuth = new auth0.WebAuth({
      // Needed for Auth0 (capitalization: ID):
      clientID: this.auth0Config.Lock.clientId,
      // Needed for Auth0Cordova (capitalization: Id):
      clientId: this.auth0Config.Lock.clientId,
      domain: this.auth0Config.Lock.domain,
      packageIdentifier: this.auth0Config.Lock.packageIdentifier, // config.xml widget ID, e.g., com.auth0.ionic
      responseType: this.auth0Config.Lock.auth.responseType,
      redirectUri: this.auth0Config.Lock.auth.redirectUrl
    });
    this.webAuth.authorize(function(err, authResult) {
      //do something
    });
  }
  public isApp()
  {
    const isApp = document.URL.indexOf('http') !== 0;
    return isApp;
  }
  public init()
  {

    let self:any = this;
    if (this.platform.is('cordova'))
    {
      this.auth0Cordova = new Auth0Cordova({
        domain: this.auth0Config.Lock.domain,
        clientId:  this.auth0Config.Lock.clientId,
        packageIdentifier: this.auth0Config.Lock.packageIdentifier,
        callbackURL: this.auth0Config.Lock.auth.redirectUrl
      });

      this.auth0Cordova.authorize({
        scope: this.auth0Config.Cordova.scope,
        audience: this.auth0Config.Cordova.audience
      }, function(err, authResult) {
        if (err) {
          console.log(err);
        }
        self.handleCordovaAuth(authResult);
        localStorage.setItem('access_token', authResult.accessToken);
      });


      // override open handler to navigate on further custom url scheme actions
      (window as any).handleOpenURL = (url: string) => {
        // this context is called outside of angular zone!
        setTimeout(() => {
          // so we need to get back into the zone..
          this.ngZone.run(() => {
            // this is in the zone again..
            this.handleOpenUrl(url);
          });
        }, 0);
      };

      // check if app was opened by custom url scheme
      const lastUrl: string = (window as any).handleOpenURL_LastURL || "";
      if (lastUrl && lastUrl !== "") {
        delete (window as any).handleOpenURL_LastURL;
        this.handleOpenUrl(lastUrl);
      }

    }
    else
    {
      this.initLock();
    }
  }
  // This handles the post-authentication process
  // When a user is being authenticated through Auth0Cordova
  // For Mobile IOS / Android / Electron Applications
  public handleCordovaAuth(authResult)
  {
    let t:any = this;
    t.setIdToken(authResult.idToken);
    t.setAccessToken(authResult.accessToken);
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log("Expires at");
    t.setStorageVariable('expires_at', expiresAt);
    this.auth0 = new auth0.Authentication({
      domain: this.auth0Config.Lock.domain,
      clientID: this.auth0Config.Lock.clientId,
    });

    this.loadProfile(function(err, profile) {
      if (!err) {
        profile.user_metadata = profile.user_metadata || {};
        t.setStorageVariable('profile', profile);
        console.log("PROFILE HEHE: " + JSON.stringify(profile));
        t.ngZone.run(() => {
          t.user = profile;
        });
      }
    });
    // Save token and profile locally
    localStorage.setItem("accessToken", authResult.accessToken);
    //t.app.getRootNav().setRoot(TabsPage);
  }
  public handleOpenUrl(url)
  {
    Auth0Cordova.onRedirectUri(url);
  }
  public login()
  {

  }
  public logout() {

    window.localStorage.removeItem('profile');
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');

    this.idToken = null;
    this.accessToken = null;
    this.user = null;
    this.app.getRootNav().setRoot('HomePage');


  }
  public loadProfile(cb)
  {
    this.auth0.userInfo(this.getStorageVariable('access_token'), cb);
  }
  public checkAuth()
  {
    // if (!this.isAuthenticated()) this.app.getRootNav().setRoot(HomePage);
    // else this.app.getRootNav().setRoot(TabsPage);
  }
  public initLogin()
  {
    this.app.getRootNav().setRoot('HomePage');
  }

}
