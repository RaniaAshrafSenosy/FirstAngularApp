import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../datainterface';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataArr:DataInterface[]=[];

  constructor(private _dataservice:DataserviceService) { }

  ngOnInit(): void {
    this._dataservice.getData().subscribe({
      next:(data)=>{this.dataArr=data.meals;
      }
    })
  }

}
