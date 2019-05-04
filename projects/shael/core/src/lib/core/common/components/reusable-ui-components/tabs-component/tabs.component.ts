import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabContentComponent } from './tab-contents/tab-content.component';

/**
 * @license
 * Copyright Shael Library Inc. All Rights Reserved.
 * @author Shashikant Mittapelli(shaelm29@gmail.com)
 * 
 * Used for generating tab-content for tabs
 * 
 */

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  
  @ContentChildren(TabContentComponent)
  tabs:QueryList<TabContentComponent>;

  setCurrentTabActive(tab?:TabContentComponent){
    if(this.tabs && this.tabs.length > 0){
      this.resetTab()
      this.tabs.map((tabElement:TabContentComponent,i:number) => {
        if(tab && tab.index == tabElement.index) {
          tab.active =  true;
        }
      });
    }
  }

  resetTab(){
    this.tabs.map((tabElement:TabContentComponent,i:number) => {
      tabElement.index = i; 
      tabElement.active = false;
    });
  }
  
  ngAfterViewInit(){
    this.setCurrentTabActive();
  }

}
