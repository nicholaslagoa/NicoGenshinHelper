import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { CharacterCard } from './character-card';

@Component({
  selector: 'app-team-maker',
  templateUrl: './team-maker.component.html',
  styleUrls: ['./team-maker.component.css']
})
export class TeamMakerComponent implements OnInit {

  cardList = [
    new CharacterCard('Bennett', '../../assets/png/bennett.png'),
    new CharacterCard('Xiangling', '../../assets/png/xiangling.png'),
    new CharacterCard('Beidou', '../../assets/png/beidou.png'),
    new CharacterCard('Childe', '../../assets/png/childe.png'),
    new CharacterCard('Fischl', '../../assets/png/fischl.png'),
    new CharacterCard('Zhongli', '../../assets/png/zhongli.png'),
    new CharacterCard('Xingqiu', '../../assets/png/xingqiu.png'),
  ];

  selectedCharacters: CharacterCard[] = [];

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addToSelectedList(card : CharacterCard){
    card.selected = !card.selected;
    if (card.selected){
      this.selectedCharacters.push(card);
    }
    else{
      this.selectedCharacters.forEach((selectedCharacter, index) =>{
        if (selectedCharacter.name == card.name) this.selectedCharacters.splice(index,1);
      })
    }
    console.log(this.selectedCharacters);
  }
}
