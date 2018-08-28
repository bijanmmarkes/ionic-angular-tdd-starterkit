import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { ConfigProvider } from "../config/config";
import {HttpClient} from "@angular/common/http";
import { Toast } from '../../controllers/toast/toast';
/*
  Generated class for the NetworkProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {
  static status:string;
  public getStatus()
  {
    return status;
  }
  public init() {
    let heartbeat: any = this.c.config.server;
    this.http.get(heartbeat + "/heartbeat", {responseType: 'text'}).subscribe(response => {
      if (response == "OK") {
        status = 'online';
        console.log(status);
      }
      else {
        status = 'offline';
        console.log(status);
      }
    });
    //network.subscribeConnect();
    this.network.onDisconnect().subscribe(() => {
      let message: string = "Your internet connection appears to be offline. Data integrity is not guaranteed.";
      status = 'offline';
      console.log(status);
      this.toast.createToastClose(message, "OK", "bottom");
    });
    this.network.onConnect().subscribe(() => {
      let message: string = "Your internet connection has been restored.";
      status = 'online';
      console.log(status);
      this.toast.createToastDuration(message, 3000, "bottom");
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('Connected to wifi');
        }
      }, 3000);
    });
  }

  constructor(public http: HttpClient, private network: Network, private c: ConfigProvider, private toast: Toast) {
  }
}

