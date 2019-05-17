import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService, GridConfig, GridConstants } from 'amexio-ng-extensions';

@Component({
  selector: 'menu-two',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class MenuTwoComponent implements OnInit {

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
    this.navmenus = [{
      "text": "Destination",
      "icon": "fa fa-television fa-fw",
      "submenus": [{
        "text": "Singapore",
      }, {
        "text": "Maldives",
      }, {
        "text": "Dubai",
      }]
    },
    {
      "text": "Activities",
      "icon": "fa fa-picture-o",
      "submenus": [{
        "text": "Photography"
      }, {
        "text": "Base Camp"
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
    ],
      this.tempData = [
        {
          label: "Home"

        },
        {
          label: "Hotels"

        },
        {
          label: "Flights"

        },
        {
          label: "Discover"

        },
        {
          label: "Deals"

        },
        {
          label: "Trips for me"

        },


        {
          label: "Support"

        }
      ]

  }
  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }

  ngOnInit() {
  }

}
