import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SvgCreatorService } from '../services/svg-creator.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from './fixed-menu-list';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css']
})
export class FixedMenuComponent implements OnInit {
  mobileQuery: MediaQueryList;
  
  menuList = [
    new MenuItem('Today-List', 'today-list', 'code'),
    new MenuItem('Primogem Calculator', 'primogem-calculator', 'home'),
    new MenuItem('Team Maker', 'team-maker', 'info'),
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    svgCreator: SvgCreatorService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    svgCreator.createSvgIcon('sidenav-toggle', '../assets/svg/icon-toggle-sidenav.svg');
  }

  ngOnInit(): void {
  }
}
