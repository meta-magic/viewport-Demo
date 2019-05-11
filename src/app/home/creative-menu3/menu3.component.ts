import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService, GridConfig, GridConstants } from 'amexio-ng-extensions';

@Component({
  selector: 'menu-three',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class MenuThreeComponent implements OnInit {

  amexiotechmenus: any;

  navmenus: any;

  gridDesktop: GridConfig;
  tempData: any;
  facebookLoginData: any;
  constructor(private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();

    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('LayoutSample1', GridConstants.Desktop)
      .addlayout(["gridmenu1", "gridmenu2", "gridmenu3", "gridlogin"])
      .addlayout(["gridmenu4", "gridmenu5", "gridmenu6", "gridlogin1"])

    this.tempData = [
      {
        label: "About"

      },
      {
        label: "Illustration"

      },
      {
        label: "Photography"

      },
      {
        label: "Web Design"

      },
      {
        label: "Personal Project"

      },
      {
        label: "Contact"

      }

    ]

  }
  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }

  ngOnInit() {
  }

}
