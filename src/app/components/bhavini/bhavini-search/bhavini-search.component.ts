import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chocklate } from '../../../models/choclateModel';

@Component({
  selector: 'app-bhavini-search',
  templateUrl: './bhavini-search.component.html',
  styleUrls: ['./bhavini-search.component.css']
})
export class BhaviniSearchComponent implements OnInit {

  @Input() All: number;
  @Input() Cadbury: number;
  @Input() Nestle: number;
  @Input() Kraft: number;
  @Input() Mars: number;

  @Output()
  onRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedChoclate = "All";

  constructor() { }

  ngOnInit() { }

  onChoclateValueChange() {
    this.onRadioButtonChange.emit(this.selectedChoclate);
  }

}
