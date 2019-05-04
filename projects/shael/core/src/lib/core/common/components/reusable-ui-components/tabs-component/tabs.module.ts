import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { TabContentComponent } from './tab-contents/tab-content.component';
import { CommonModule } from '@angular/common';
import { VerticalTabComponent } from '../vertical-tab/vertical-tab.component';

@NgModule({
  declarations: [TabsComponent,TabContentComponent,VerticalTabComponent],
  imports: [CommonModule],
  exports: [TabsComponent,TabContentComponent,VerticalTabComponent]
})
export class TabsModule { }
