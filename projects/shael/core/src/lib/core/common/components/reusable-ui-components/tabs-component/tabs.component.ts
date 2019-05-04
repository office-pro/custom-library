import { Component, OnInit, ContentChildren, ViewChildren, QueryList } from '@angular/core';
import { TabContentComponent } from './tab-contents/tab-content.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  
  @ContentChildren(TabContentComponent)
  tabs:QueryList<TabContentComponent>;
  
  constructor() { }
  
  ngOnInit() {
  }
  
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
    console.log(this.tabs)
  }

}
