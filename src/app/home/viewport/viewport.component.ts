import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService, GridConfig, GridConstants } from 'amexio-ng-extensions';

@Component({
  selector: 'viewport-demo1',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {

  amexiotechmenus: any;

  navmenus: any;

  gridDesktop: GridConfig;

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

    this.navmenus = [{
      "text": "Classes",
      "icon": "fa fa-television fa-fw",
      "submenus": [{
        "text": "Hip Hop",
      }, {
        "text": "Zumba",
      }, {
        "text": "Dance Fitness",
      }, {
        "text": "Salsa",
      }]
    },
    {
      "text": "Gallery",
      "icon": "fa fa-picture-o",
      "submenus": [{
        "text": "Kids Classes"
      }, {
        "text": "City Dance Competition"
      }, {
        "text": "Zumba Sessions"
      }]
    },
    {
      "text": "About Us",
      "icon": "fa fa-address-book-o fa-fw",
      "submenus": [{
        "text": "Contact"
      }, {
        "text": "Privacy Policies"
      }]
    }
    ]
  }

  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }

  ngOnInit() {
  }

}
