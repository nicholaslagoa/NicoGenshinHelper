import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SvgCreatorService } from '../services/svg-creator.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from './fixed-menu-list';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css']
})
export class FixedMenuComponent implements OnInit {
  mobileQuery: MediaQueryList;
  
  menuList = [
    new MenuItem('Today-List', 'today-list', 'clock-sidenav'),
    new MenuItem('Primogem Calculator', 'primogem-calculator', 'primogem-sidenav'),
    new MenuItem('Team Maker', 'team-maker', 'team-sidenav'),
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    svgCreator: SvgCreatorService,
    public loaderService: LoaderService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    svgCreator.createSvgIcon('sidenav-toggle', '../assets/svg/icon-toggle-sidenav.svg');
    svgCreator.createSvgIcon('clock-sidenav', '../assets/svg/icon-clock-sidenav.svg');
    svgCreator.createSvgIcon('primogem-sidenav', '../assets/svg/icon-primogem-sidenav.svg');
    svgCreator.createSvgIcon('team-sidenav', '../assets/svg/icon-team-sidenav.svg');
  }

  ngOnInit(): void {
  }
}
