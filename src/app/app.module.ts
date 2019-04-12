import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { AppComponent } from './app.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ViewportComponent2 } from './viewport2/viewport2.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
const ROUTE: Routes = [
  { path: '', redirectTo: 'scrollable-viewport', pathMatch: 'full' },

  {
      path: 'scrollable-viewport', component: ViewportComponent,
  },
  {
      path: 'viewport', component:ViewportComponent2
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    ViewportComponent2
  ],
  imports: [
    BrowserModule, AmexioWidgetModule, RouterModule.forRoot(ROUTE),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
