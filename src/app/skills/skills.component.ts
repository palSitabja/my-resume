import { Component, OnInit } from '@angular/core';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  color="green"
  mode="determinate"
  
  languagesList=[
    ['C','devicon-c-plain colored','90','c-spinner'],
    ['JAVA','devicon-java-plain colored','90','java-spinner'],
    ['Python3','devicon-python-plain colored','80','python-spinner'],
    ['JS','devicon-javascript-plain colored','80','js-spinner']

  ]
  frameworksList=[
    ['Angular','devicon-angularjs-plain colored','80','angular-spinner'],
    ['React','devicon-react-original colored','80','react-spinner'],
    ['Spring','','80','spring-spinner'],
    ['Node','devicon-nodejs-plain colored','70','node-spinner']

  ]

  constructor() { }

  ngOnInit(): void {
  }
  divByTen(num){
    return num/10
  }
}
