import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eduData:any=[]
  error:any
  constructor(private eduService:EducationService) { }

  ngOnInit(): void {
    this.eduService.getData().subscribe(
      data=>{
        this.eduData=data,
        console.log(data);  
      },
      error=>this.error=error
    )
  }

}
