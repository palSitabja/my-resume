import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expData:any=null
  experiences:any=[]
  error:any
  constructor(private expService:ExperienceService) {}

  ngOnInit(): void {
    this.expService.getData().subscribe(
      data=>{
        this.expData=data,
        this.experiences=data.experiences
      },
      error=>this.error=error
    )
  }

}
