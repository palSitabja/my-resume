import { Component,OnInit } from '@angular/core';
import { faSchool,faGraduationCap,faUserAlt,faCogs,faBriefcase,faAward } from '@fortawesome/free-solid-svg-icons';
import { Router,ActivatedRoute, NavigationEnd} from "@angular/router";
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selected='about'
  title = 'my-cv';
  sideMenus=['About','Education','Carrer',]
  faUserAlt=faUserAlt
  faGraduationCap=faGraduationCap
  faSchool=faSchool
  faCogs=faCogs
  faBriefcase=faBriefcase
  faAward=faAward
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    //console.log(this.router.url);
    //this.selected=this.activatedRoute.snapshot
    //console.log(this.activatedRoute.);
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // ).subscribe(x => console.log(x.url))
  //   this.router.events
  //         .subscribe(event => 
  //          {
                     
  //             console.log(event.url);
  //          });
    
  // }
    this.router.navigate([''])
  
  }
  changeSelected(current){
    // if(this.router.url==='/'){
    //   this.selected='about'
    //   console.log(this.selected);
      
    // }
    // this.activatedRoute.url.subscribe(
    //   success=>console.log(success)
      
    // )
    console.log(this.activatedRoute.snapshot.pathFromRoot);
    
    this.selected=current
    this.router.navigate(['/'+current])
    
  }
}
