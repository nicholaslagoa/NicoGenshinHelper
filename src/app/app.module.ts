import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrimogemCalculatorComponent } from './primogem-calculator/primogem-calculator.component';
import { TeamMakerComponent } from './team-maker/team-maker.component';
import { TodayListComponent } from './today-list/today-list.component';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimogemCalculatorComponent,
    TeamMakerComponent,
    TodayListComponent,
    FixedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
