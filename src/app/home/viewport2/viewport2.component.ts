import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService, GridConfig, GridConstants} from 'amexio-ng-extensions';

@Component({
  selector: 'viewport-demo2',
  templateUrl: './viewport2.component.html',
  styleUrls: ['./viewport2.component.css']
})
export class ViewportComponent2 implements OnInit {

  gridDesktop: GridConfig;
  categories: any;
  navmenus: any;

  constructor(private _gridlayoutService : AmexioGridLayoutService) { 

    this.categories = [{
      id: 'tv',
      name: 'TV'
    },
    {
      id: 'apartment',
      name: 'Apartment'
    }];

    this.navmenus =     this.navmenus = [{
      "text": "Buy",
      "icon": "fa fa-shopping-cart",
      "submenus": [{
        "text": "Home Buying Guide",
      }, {
        "text": "Post your Requirement",
      }, {
        "text": "Home Loan",
      }]
    },
    {
      "text": "Sell",
      "icon": "fa fa-check",
      "submenus": [{
        "text": "Post Your Property"
      }, {
        "text": "Propworth Calculator"
      }, {
        "text": "Find an Agent"
      }]
    }
    ]
    this.createLayouts();
    
    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('LayoutSample1', GridConstants.Desktop)
    .addlayout(["gridmenu1", "gridmenu2", "gridlogin", "gridlogin"])
    .addlayout(["gridmenu3", "gridmenu4", "gridlogin", "gridlogin"])
  }

  ngOnInit() {
  }

}
