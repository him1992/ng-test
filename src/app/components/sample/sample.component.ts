import { Component } from '@angular/core';
import {Student} from '../../Models/student';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  //check with true and false - prop binding works proper and interpolation can`t
  isDisabled : boolean = false;

  //attribute binding
  tblColSpan:number = 2;

  constructor() { 
    console.log('constructor called');
  }

  stu1 = new Student(101,'Harsh','Ahmedabad');
  stu2 = new Student(102,'Hardik','Surat');


}
