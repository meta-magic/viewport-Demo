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
  contactList: any;
  public max:number=5;

  public propertyOption1:number=5;
  public dealsClosed1: number = 4;
  public response1: number = 3;
  public customerResponse1: number = 4;

  public propertyOption2:number=4;
  public dealsClosed2: number = 4;
  public response2: number = 5;
  public customerResponse2: number = 3;


  public propertyOption3:number=4;
  public dealsClosed3: number = 5;
  public response3: number = 3;
  public customerResponse3: number = 3;


  constructor(private _gridlayoutService : AmexioGridLayoutService) { 


    this.contactList = [
      {
        'name': 'Ketan Gote',
        'description': 'UI/UX, Microservice, Kubernetes, Docker ',
        'imagepath': 'assets/profile/ketan.jpg',
        'bgcolor': 'linear-gradient(40deg,#12c2e9, #ec38bc)'
      },
      {
        'name': 'Sagar Jadhav',
        'description': 'Angular, Java, Microservices',
        'imagepath': 'assets/profile/sagar.jpeg',
        'bgcolor': 'linear-gradient(40deg,#141E30,#243B55)'
      },
      {
        'name': 'Dattaram Gawas',
        'description': 'UI / UX Desinger',
        'imagepath': 'assets/profile/dats.jpg',
        'bgcolor': 'linear-gradient(40deg,#a8ff78, #78ffd6)'
      },
    
    ];

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
