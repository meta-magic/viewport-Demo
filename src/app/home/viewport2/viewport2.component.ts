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
  sampledatachips: any;
  sampledatachips1: any;

  constructor(private _gridlayoutService : AmexioGridLayoutService) { 
    this.sampledatachips = [{
      "icon": "fa fa-check-circle",
      "label": "Vitrified Balcony ",
      "color":"#bc8b20",
      "closable": false,
    },
    {
      "icon": "fa fa-check-circle",
      "label": "24*7 Security",
      "closable": false,
      "color":"#bc8b20"
    }, 
    {
      "icon": "fa fa-check-circle",
      "label": "Parking",
      "closable": false,
      "color":"#bc8b20"
    }, 
    {
      "icon": "fa fa-check-circle",
      "label": "Close to Mall",
      "closable": false,
      "color":"#bc8b20"
    }]
    this.sampledatachips1 = [{
      "icon": "fa fa-check-circle",
      "label": "Vitrified Balcony ",
      "color":"#bc8b20",
      "closable": false,
    },
    {
      "icon": "fa fa-check-circle",
      "label": "24*7 Security",
      "closable": false,
      "color":"#bc8b20"
    }, 
    {
      "icon": "fa fa-check-circle",
      "label": "Parking",
      "closable": false,
      "color":"#bc8b20"
    }, 
    {
      "icon": "fa fa-check-circle",
      "label": "Close to Mall",
      "closable": false,
      "color":"#bc8b20"
    },
    {
      "icon": "fa fa-wifi",
      "label": "wifi",
      "closable": false,
      "color":"#bc8b20"
    }]
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
    },
    {
      "text": "About Us",
      "icon": "fa fa-address-book-o fa-fw",
      "submenus": [{
        "text": "Contact"
      }, {
        "text": "Help"
      }]
    }
    ]
    
    // Create the Layouts
    // this._gridlayoutService.createLayout(this.gridDesktop);
  }

  ngOnInit() {
  }

}
