import { Component, OnInit } from '@angular/core';
import { TeamMakerService } from '../services/team-maker.service';
import { CharacterCard } from './character-card';

@Component({
  selector: 'app-team-maker',
  templateUrl: './team-maker.component.html',
  styleUrls: ['./team-maker.component.css']
})
export class TeamMakerComponent implements OnInit {

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
    new CharacterCard('Xingqiu', '../../assets/png/xingqiu.png', 'hydro')
  ];
  cardList : CharacterCard[] = [];
  selectedCharacters: string[] = ['Traveler', 'Amber', 'Kaeya', 'Lisa'];


  constructor(private service : TeamMakerService) { }

  ngOnInit(): void {
    this.cardList = this.cardListBase;
  }

  addToSelectedList(card : CharacterCard){
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

  getTeams(){
    this.service.getTeams(this.selectedCharacters).subscribe(res => {
      console.log(res);
    })
  }

  filter(filter : string){
    if (filter != 'clear' && filter != 'four' && filter != 'five'){ //element filter
      this.cardList = this.cardListBase;
      this.cardList = this.cardList.filter(x => x.element == filter);
    }
    else if (filter == 'four'){
      this.cardList = this.cardListBase;
      this.cardList = this.cardList.filter(x => !x.isFiveStar);
    }
    else if (filter == 'five'){
      this.cardList = this.cardListBase;
      this.cardList = this.cardList.filter(x => x.isFiveStar);
    }
    else{//clear filter
      this.cardList = this.cardListBase;
    }
  }
}
