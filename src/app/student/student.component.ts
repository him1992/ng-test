import { Component, OnInit } from '@angular/core';
import { StudentInfo } from '../models/studentInfo';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


    StudentInfo = new StudentInfo();
    StudentInfos: StudentInfo[];

    constructor() { }

    selectedSubject = "All";

  ngOnInit() {
    this.StudentInfos = this.StudentInfo.GetStudentInfos();

  }

  GetStudentCount(str):number
  {
    //console.log(str);
    if(str!='All')
    {

    return this.StudentInfos.filter(a=>a.subject == str).length;
    }
    else
    {
      console.log(1);
      return this.StudentInfos.length;
    }
  }

  CountSubject(selectedSubject)
  {
    console.log(':: '+selectedSubject);
      this.selectedSubject = selectedSubject;
  }

}
