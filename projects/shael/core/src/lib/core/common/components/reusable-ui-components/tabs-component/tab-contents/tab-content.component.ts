import { Component, OnInit, Input, TemplateRef } from '@angular/core';

/**
 * @license
 * Copyright Shael Library Inc. All Rights Reserved.
 * @author Shashikant Mittapelli(shaelm29@gmail.com)
 * 
 * Used for adding content in tabs
 */

@Component({
  selector: 'tab-content',
  template: `
  <div *ngIf="active">
    <ng-container *ngTemplateOutlet="content ? content : default"></ng-container>
    <ng-template #default>
      <ng-content></ng-content>
    </ng-template>
  </div>`
})
export class TabContentComponent{

  @Input()
  label:string;

  @Input()
  active:boolean

  index:number;

  @Input()
  content:TemplateRef<any>;
}
