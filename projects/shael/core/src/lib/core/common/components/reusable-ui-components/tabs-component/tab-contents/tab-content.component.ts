import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  @Input()
  label:string;

  @Input()
  active:boolean

  index:number;

  @Input()
  content:TemplateRef<any>;

  constructor() { }

  ngOnInit() {}

}
