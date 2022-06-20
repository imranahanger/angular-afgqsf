import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  type: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'type:new', type: "SUPPORTING ACTIONS", action: 'edit'},
  { name: 'Country API', type: "TAG", action: 'edit'}
];
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'type', 'action'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */