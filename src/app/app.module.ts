import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
const ROUTE: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
      path: 'home', loadChildren: '../app/home/home.module#HomeModule',
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AmexioWidgetModule, RouterModule.forRoot(ROUTE,{useHash: true}),FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
