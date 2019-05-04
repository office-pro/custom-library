import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { TabContentComponent } from './tab-contents/tab-content.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TabsComponent,TabContentComponent],
  imports: [CommonModule],
  exports: [TabsComponent,TabContentComponent]
})
export class TabsModule { }
