import { Component, OnInit } from '@angular/core';
import { TeamMakerService } from '../services/team-maker.service';
import { CharacterCard } from './character-card';

@Component({
  selector: 'app-team-maker',
  templateUrl: './team-maker.component.html',
  styleUrls: ['./team-maker.component.css']
})
export class TeamMakerComponent implements OnInit {

  cardList = [
    new CharacterCard('Traveler', '../../assets/png/traveler.png', 'anemo', true),//png size = 208x248
    new CharacterCard('Amber', '../../assets/png/amber.png', 'pyro', true),
    new CharacterCard('Kaeya', '../../assets/png/kaeya.png', 'cryo', true),
    new CharacterCard('Lisa', '../../assets/png/lisa.png', 'electro', true),
    new CharacterCard('Noelle', '../../assets/png/noelle.png', 'geo'),
    new CharacterCard('Bennett', '../../assets/png/bennett.png', 'pyro'),
    new CharacterCard('Xiangling', '../../assets/png/xiangling.png', 'pyro'),
    new CharacterCard('Beidou', '../../assets/png/beidou.png', 'electro'),
    new CharacterCard('Childe', '../../assets/png/childe.png', 'hydro'),
    new CharacterCard('Fischl', '../../assets/png/fischl.png', 'electro'),
    new CharacterCard('Zhongli', '../../assets/png/zhongli.png', 'geo'),
    new CharacterCard('Xingqiu', '../../assets/png/xingqiu.png', 'hydro')
  ];

  selectedCharacters: string[] = ['Traveler', 'Amber', 'Kaeya', 'Lisa'];

  status: boolean = false;

  constructor(private service : TeamMakerService) { }

  ngOnInit(): void {
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
}
