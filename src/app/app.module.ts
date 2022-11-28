import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from './services/loader/interceptor.service';

import { AppComponent } from './app.component';
import { PrimogemCalculatorComponent } from './primogem-calculator/primogem-calculator.component';
import { TeamMakerComponent } from './team-maker/team-maker.component';
import { TodayListComponent } from './today-list/today-list.component';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';
import { LoaderComponent } from './services/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimogemCalculatorComponent,
    TeamMakerComponent,
    TodayListComponent,
    FixedMenuComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
