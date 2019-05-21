import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService, GridConfig, GridConstants} from 'amexio-ng-extensions';

@Component({
  selector: 'viewport-demo3',
  templateUrl: './viewport3.component.html',
  styleUrls: ['./viewport3.component.css']
})
export class ViewportComponent3 implements OnInit {

  categories: any;
  navmenus: any;
  sampledatachips: any;
  sampledatachips1: any;

  constructor() { 
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

    this.navmenus =     this.navmenus = [
    {
      "text": "About",
      "icon": "fa fa-address-book-o fa-fw",
      "submenus": [{
        "text": "Accommodations"
      }, {
        "text": "Dining"
      }, {
        "text": "Activities"
      }]
    },
    {
      "text": "Contact",
      "icon": "fa fa-phone",
      "submenus": [{
        "text": "Help"
      }, {
        "text": "Rates and Reservations"
      }]
    }
    ]
  }

  ngOnInit() {
  }

}
