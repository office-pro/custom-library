import { Component, OnInit, Input, TemplateRef } from '@angular/core';

/**
 * @license
 * Copyright Shael Library Inc. All Rights Reserved.
 * @author Shashikant Mittapelli(shaelm29@gmail.com)
 * 
 * Used for creating cards
 */

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls:['./card.component.css']

})
export class CardComponent{

    @Input()
    cardTitle:string;
    @Input()
    cardText:string;
    @Input()
    cardHeader:string;

}
