import { Component, OnInit } from '@angular/core';
import { TeamMakerService } from '../services/team-maker.service';
import { CharacterCard } from './character-card';
import { CharacterFilter } from './character-filter';

@Component({
  selector: 'app-team-maker',
  templateUrl: './team-maker.component.html',
  styleUrls: ['./team-maker.component.css']
})
export class TeamMakerComponent implements OnInit {

  //#region CHARACTER-LIST
  cardListBase = [
    new CharacterCard('Traveler', '../../assets/png/traveler.png', 'anemo', true, true),//png size = 208x248
    new CharacterCard('Amber', '../../assets/png/amber.png', 'pyro', false, true),
    new CharacterCard('Kaeya', '../../assets/png/kaeya.png', 'cryo', false, true),
    new CharacterCard('Lisa', '../../assets/png/lisa.png', 'electro', false, true),
    new CharacterCard('Noelle', '../../assets/png/noelle.png', 'geo'),
    new CharacterCard('Bennett', '../../assets/png/bennett.png', 'pyro'),
    new CharacterCard('Xiangling', '../../assets/png/xiangling.png', 'pyro'),
    new CharacterCard('Beidou', '../../assets/png/beidou.png', 'electro'),
    new CharacterCard('Childe', '../../assets/png/childe.png', 'hydro', true),
    new CharacterCard('Fischl', '../../assets/png/fischl.png', 'electro'),
    new CharacterCard('Zhongli', '../../assets/png/zhongli.png', 'geo', true),
    new CharacterCard('Xingqiu', '../../assets/png/xingqiu.png', 'hydro'),
    new CharacterCard('Yoimiya', '../../assets/png/yoimiya.png', 'pyro')
  ];
  cardList : CharacterCard[] = [];
  selectedCharacters: string[] = ['Traveler', 'Amber', 'Kaeya', 'Lisa'];
  //#endregion

  filters = [
    new CharacterFilter('four', '../../assets/png/anemo.png'),
    new CharacterFilter('five', '../../assets/png/anemo.png'),
    new CharacterFilter('anemo', '../../assets/png/anemo.png'),
    new CharacterFilter('pyro', '../../assets/png/pyro.png'),
    new CharacterFilter('electro', '../../assets/png/electro.png'),
    new CharacterFilter('hydro', '../../assets/png/hydro.png'),
    new CharacterFilter('geo', '../../assets/png/geo.png'),
    new CharacterFilter('cryo', '../../assets/png/cryo.png'),
    new CharacterFilter('dendro', '../../assets/png/dendro.png'),
    new CharacterFilter('clear', '../../assets/png/clear.png')
  ];
  filterList : CharacterFilter[] = [];
  selectedFilters: string[] = [];

  constructor(private service : TeamMakerService) { }

  ngOnInit(): void {
    this.cardList = this.cardListBase;
  }

  //#region CHARACTER-LIST
  addToSelectedCharacterList(card : CharacterCard){
    if (card.name != 'Traveler' &&
      card.name != 'Kaeya' &&
      card.name != 'Lisa' &&
      card.name != 'Amber')
    {
      card.selected = !card.selected;

      if (card.selected){
        this.selectedCharacters.push(card.name);
      }

      else{
        this.selectedCharacters.forEach((selectedCharacterName, index) =>{
          if (selectedCharacterName == card.name) this.selectedCharacters.splice(index,1);
        });
      }

      console.log(this.selectedCharacters);
    }
  }
  //#endregion

  filter(filter : CharacterFilter){
    if (filter.property != 'clear' && filter.property != 'four' && filter.property != 'five'){ //element filter
      this.cardList = this.cardListBase;
      this.addToSelectedFilterList(filter);
      this.cardList = this.cardList.filter(x => x.element == filter.property);
    }
    else if (filter.property == 'four'){//four-star filter
      this.cardList = this.cardListBase;
      this.addToSelectedFilterList(filter);
      this.cardList = this.cardList.filter(x => !x.isFiveStar);
    }
    else if (filter.property == 'five'){//five-star filter
      this.cardList = this.cardListBase;
      this.addToSelectedFilterList(filter);
      this.cardList = this.cardList.filter(x => x.isFiveStar);
    }
    else{//clear filter
      this.cardList = this.cardListBase;
    }
  }

  addToSelectedFilterList(filter : CharacterFilter){
    if (filter.property != 'clear')
    {
      if (filter.property == 'five')
      {
        this.selectedFilters.forEach((selectedFilterProperty, index) =>{
          if (selectedFilterProperty == 'five') this.selectedFilters.splice(index,1);
        });
      }
      else if (filter.property == 'four')
      {
        this.selectedFilters.forEach((selectedFilterProperty, index) =>{
          if (selectedFilterProperty == 'four') this.selectedFilters.splice(index,1);
        });
      }

      filter.selected = !filter.selected;

      if (filter.selected){
        this.selectedFilters.push(filter.property);
      }

      else{
        this.selectedFilters.forEach((selectedFilterProperty, index) =>{
          if (selectedFilterProperty == filter.property) this.selectedFilters.splice(index,1);
        });
      }

      console.log(this.selectedFilters);
    }
  }

  getTeams(){
    this.service.getTeams(this.selectedCharacters).subscribe(res => {
      console.log(res);
    })
  }
}
