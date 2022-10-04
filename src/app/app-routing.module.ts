import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMakerComponent } from './team-maker/team-maker.component';
import { PrimogemCalculatorComponent } from './primogem-calculator/primogem-calculator.component';
import { TodayListComponent } from './today-list/today-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'today-list', component: TodayListComponent },
  { path: 'primogem-calculator', component: PrimogemCalculatorComponent },
  { path: 'team-maker', component: TeamMakerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
