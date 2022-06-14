import { Component, OnInit } from '@angular/core';
import { AchievementService } from './achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  data:any=null
  badges:any=[]
  certifications:any=[]
  error:any
  constructor(private achievementService:AchievementService) { }

  ngOnInit(): void {
    this.achievementService.getData().subscribe(
      data=>{
        this.data=data
        this.badges=data.badges
        this.certifications=data.certificates
      },
      error=>this.error=error
    )
  }

}
