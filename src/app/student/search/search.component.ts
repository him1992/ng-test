import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentInfo } from '../../models/studentInfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() All: number;
  @Input() maths: number;
  @Input() science: number;
  @Input() english: number;

  @Output()
  onRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedSubject = "All";

  constructor() { }

  ngOnInit() { }

  onSubjectValueChange() {
    console.log('asd->'+this.selectedSubject);
    this.onRadioButtonChange.emit(this.selectedSubject);
  }


}
