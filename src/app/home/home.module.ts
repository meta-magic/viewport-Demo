import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { ViewportComponent } from './viewport/viewport.component';
import { ViewportComponent2 } from './viewport2/viewport2.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
const ROUTE: Routes = [

    {
        path: '', component: HomeComponent,
        children: [
          { path: '', redirectTo: 'scrollable-viewport', pathMatch: 'full' },
          { path: 'scrollable-viewport', component: ViewportComponent },
          { path: 'viewport', component: ViewportComponent2 }
        ]
        }
];
@NgModule({
  declarations: [
    HomeComponent,
    ViewportComponent,
    ViewportComponent2
  ],
  imports: [
    CommonModule, AmexioWidgetModule, RouterModule.forChild(ROUTE),

  ],
  providers: [],
})
export class HomeModule { }
