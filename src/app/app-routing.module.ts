import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  
  {path:'about',component:AboutComponent},
  {path:'edu',component:EducationComponent},
  {path:'skill',component:SkillsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'achievement',component:AchievementComponent},
  {path: '**', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
