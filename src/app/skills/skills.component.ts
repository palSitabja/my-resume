import { Component, OnInit } from '@angular/core';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { SkillService } from './skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  color="green"
  mode="determinate"
  skilldata:any=[]
  error:any
  languagesList:any=[]
  frameworksList:any=[]
  dbList:any=[]
  tools:any=[]
  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.skillService.getData().subscribe(
      data=>{
        this.skilldata=data
        this.languagesList=data[1].Programming
        this.frameworksList=data[2].Frameworks
        this.dbList=data[3].db
        this.tools=data[4].tool
      },
      error=>this.error=error
    )
  }
  divByTen(num){
    return num/10
  }
}
