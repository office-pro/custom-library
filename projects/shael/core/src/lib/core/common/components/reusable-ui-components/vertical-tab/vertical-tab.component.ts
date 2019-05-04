import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabsComponent } from '../tabs-component/tabs.component';

/**
 * @license
 * Copyright Shael Library Inc. All Rights Reserved.
 * @author Shashikant Mittapelli(shaelm29@gmail.com)
 * 
 * Used for generating Vertical tabs
 * 
 */

@Component({
  selector: 'vertical-tabs',
  template: `
  <div class="tab">
    <div class="tab-header">
      <ul class="tab-header-names">
        <li [class.active]="tab?.active" *ngFor="let tab of tabs" (click)="setCurrentTabActive(tab)">{{tab?.label}}</li>
      </ul>
    </div>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>  
  </div> 
  `,
  styleUrls: ['./vertical-tab.component.css']
})
export class VerticalTabComponent extends TabsComponent {
  
  ngAfterViewInit(){
    this.setCurrentTabActive();
  }

}
