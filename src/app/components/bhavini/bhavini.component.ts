import { Component, OnInit } from '@angular/core';
import { Chocklate } from '../../Models/choclateModel';

@Component({
  selector: 'app-bhavini',
  templateUrl: './bhavini.component.html',
  styleUrls: ['./bhavini.component.css']
})
export class BhaviniComponent implements OnInit {

  choklate = new Chocklate();
  choklastes: Chocklate[];

  constructor() { }

  selectedChoclate = "All";

  ngOnInit() {
    this.choklastes = this.choklate.GetChoklateInfos();
  }

  GetChoclateCount(str):number
  {
    if(str!='')
    {
    return this.choklastes.filter(a=>a.manufacturer == str).length;
    }
    else
    {
      return this.choklastes.length;
    }
  }

  CountChoclates(selectedChoklate)
  {
      this.selectedChoclate = selectedChoklate;
  }


}
