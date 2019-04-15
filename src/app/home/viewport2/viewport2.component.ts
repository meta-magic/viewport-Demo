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
  constructor(private _gridlayoutService : AmexioGridLayoutService) { 

    this.categories = [{
      id: 'tv',
      name: 'TV'
    },
    {
      id: 'apartment',
      name: 'Apartment'
    }];

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
