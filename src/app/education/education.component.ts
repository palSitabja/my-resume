import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  semMarks=[
    ['Sem-8','10.00'],
    ['Sem-7','8.81'],
    ['Sem-6','8.73'],
    ['Sem-5','8.85'],
    ['Sem-4','8.85'],
    ['Sem-3','8.21'],
    ['Sem-2','8.31'],
    ['Sem-1','8.26'],
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
