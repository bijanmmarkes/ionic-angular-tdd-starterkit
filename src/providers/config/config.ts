import { Injectable } from '@angular/core';
/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider
{
  config:any = require("./config.json");
  auth0:any = require("./auth0.json");
  constructor() {}
}
