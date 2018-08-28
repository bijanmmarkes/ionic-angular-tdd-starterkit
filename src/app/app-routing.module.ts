// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import {HomePage} from "../pages/home/home";
// import {App} from "./app.component";
//
// export const appRoutes: Routes = [
//   {path: 'home', component: HomePage},
//   {path: '', redirectTo:'/', component: App},
//   {path: '**', component: App}
// ];
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "../pages/home/home";
import {AppComponent} from "./app.component";
const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouter {}
