import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Toast
{
  private currentToast:any = false;
  constructor(private toastCtrl: ToastController) {}
  createToastDuration(message:string, duration:number, position:string)
  {
    if (this.currentToast) this.currentToast.dismiss();
    this.currentToast = this.toastCtrl.create(
    {
      message: message,
      duration: duration,
      position: position
    });
    this.currentToast.onDidDismiss(() => {

    });
    this.currentToast.present();
  }
  createToastClose(message:string, closeButtonText:string, position:string)
  {
    this.currentToast = this.toastCtrl.create(
    {
      message: message,
      closeButtonText: closeButtonText,
      position: position,
      showCloseButton: true
    });

    this.currentToast.onDidDismiss(() => {

    });

    this.currentToast.present();
  }
}
