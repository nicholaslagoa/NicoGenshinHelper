import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';
import { TeamMakerService } from '../services/team-maker.service';
import { CharacterCard } from './character-card';
import { CharacterFilter } from './character-filter';

@Component({
  selector: 'app-team-maker',
  templateUrl: './team-maker.component.html',
  styleUrls: ['./team-maker.component.css']
})
export class TeamMakerComponent implements OnInit {

  mobileQuery: MediaQueryList;
  isMobile : boolean = false;

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
    new CharacterCard('Yoimiya', '../../assets/png/yoimiya.png', 'pyro', true),
    new CharacterCard('Diluc', '../../assets/png/diluc.png', 'pyro', true),
    new CharacterCard('Klee', '../../assets/png/klee.png', 'pyro', true),
    new CharacterCard('Hu Tao', '../../assets/png/hutao.png', 'pyro', true),
    new CharacterCard('Ganyu', '../../assets/png/ganyu.png', 'cryo', true),
    new CharacterCard('Yanfei', '../../assets/png/yanfei.png', 'pyro'),
    new CharacterCard('Diona', '../../assets/png/diona.png', 'cryo'),
    new CharacterCard('Chongyun', '../../assets/png/chongyun.png', 'cryo'),
    new CharacterCard('Collei', '../../assets/png/collei.png', 'dendro'),
    new CharacterCard('Nahida', '../../assets/png/collei.png', 'dendro', true),
    new CharacterCard('Cyno', '../../assets/png/collei.png', 'electro', true),
    new CharacterCard('Yae Miko', '../../assets/png/yaemiko.png', 'electro', true),
    new CharacterCard('Tighnari', '../../assets/png/tighnari.png', 'dendro', true),
    new CharacterCard('Raiden', '../../assets/png/raiden.png', 'electro', true),
    new CharacterCard('Eula', '../../assets/png/eula.png', 'cryo', true),
    new CharacterCard('Ayaka', '../../assets/png/ayaka.png', 'cryo', true),
    new CharacterCard('Rosaria', '../../assets/png/rosaria.png', 'cryo'),
    new CharacterCard('Fischl', '../../assets/png/fischl.png', 'electro'),
    new CharacterCard('Gorou', '../../assets/png/gorou.png', 'geo'),
    new CharacterCard('Keqing', '../../assets/png/keqing.png', 'electro', true),
    new CharacterCard('Kokomi', '../../assets/png/kokomi.png', 'hydro', true),
    new CharacterCard('K.Shinobu', '../../assets/png/kuki.png', 'electro'),
    new CharacterCard('Kazuha', '../../assets/png/kazuha.png', 'anemo', true),
    new CharacterCard('Qiqi', '../../assets/png/qiqi.png', 'cryo', true),
    new CharacterCard('Mona', '../../assets/png/mona.png', 'hydro', true),
    new CharacterCard('Xinyan', '../../assets/png/xinyan.png', 'pyro'),
    new CharacterCard('Thoma', '../../assets/png/thoma.png', 'pyro'),
    new CharacterCard('Venti', '../../assets/png/venti.png', 'anemo', true),
    new CharacterCard('Yelan', '../../assets/png/yelan.png', 'hydro', true),
    new CharacterCard('Yunjin', '../../assets/png/yunjin.png', 'geo'),
    new CharacterCard('Razor', '../../assets/png/razor.png', 'electro'),
    new CharacterCard('K.Sara', '../../assets/png/sara.png', 'electro'),
    new CharacterCard('Sayu', '../../assets/png/sayu.png', 'anemo'),
    new CharacterCard('Sucrose', '../../assets/png/sucrose.png', 'anemo'),
    new CharacterCard('Ninguangg', '../../assets/png/ninguangg.png', 'geo'),
    new CharacterCard('Heizou', '../../assets/png/heizou.png', 'anemo'),
    new CharacterCard('Itto', '../../assets/png/itto.png', 'geo', true),
    new CharacterCard('Ayato', '../../assets/png/ayato.png', 'hydro', true),
    new CharacterCard('Barbara', '../../assets/png/barbara.png', 'hydro'),
    new CharacterCard('Albedo', '../../assets/png/albedo.png', 'geo', true),
    new CharacterCard('Aloy', '../../assets/png/aloy.png', 'cryo', true),
    new CharacterCard('Nilou', '../../assets/png/collei.png', 'hydro', true),
    new CharacterCard('Candace', '../../assets/png/collei.png', 'hydro'),
    new CharacterCard('Dori', '../../assets/png/collei.png', 'electro'),
    new CharacterCard('Xiao', '../../assets/png/xiao.png', 'anemo', true),
  ];
  cardList : CharacterCard[] = [];
  selectedCharacters: string[] = ['Traveler', 'Amber', 'Kaeya', 'Lisa'];
  //#endregion

  //#region FILTER
  filters = [
    new CharacterFilter('four', '../../assets/png/four.png'),
    new CharacterFilter('five', '../../assets/png/five.png'),
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
  //#endregion

  constructor(private service : TeamMakerService,
    media : MediaMatcher,
    private loader : LoaderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    this.cardList = this.cardListBase;
    this.loader.hide();
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

  clearSelectedCharacters(){
    this.selectedCharacters.length = 0;
    
    this.cardList.forEach((card, index) => {
      if (card.selected)
      {
        if (card.name != 'Kaeya' && card.name != 'Amber' && card.name != 'Lisa' && card.name != 'Traveler')
        {
          card.selected = false;
        }
      }
    });
  }
  //#endregion

  //#region FILTER-LIST
  addToSelectedFilterList(filter : CharacterFilter){
    // this.loader.show();
    if (filter.property == 'clear')
    {
      this.selectedFilters.splice(0, this.selectedFilters.length);
      this.filters.forEach((filterItem, index) => {
        filterItem.selected = false;
      })
    }

    if (filter.property == 'five')
    {
      this.selectedFilters.forEach((selectedFilterProperty, index) =>{//remove 'four' from characterFilter
        if (selectedFilterProperty == 'four') this.selectedFilters.splice(index,1);
      });

      this.filters.forEach((filterItem, index) =>{//remove 'four' from selectedFilters at 'Filters:' tab
        if (filterItem.property == 'four' && filterItem.selected) this.filters[index].selected = !this.filters[index].selected;
      });
    }
  
    else if (filter.property == 'four')
    {
      this.selectedFilters.forEach((selectedFilterProperty, index) =>{//remove 'five' from characterFilter
        if (selectedFilterProperty == 'five') this.selectedFilters.splice(index,1);
      });
    
      this.filters.forEach((filterItem, index) =>{//remove 'five' from selectedFilters at 'Filters:' tab
        if (filterItem.property == 'five' && filterItem.selected) this.filters[index].selected = !this.filters[index].selected;
      });
    }

    if (filter.property != 'four' && filter.property != 'five' && filter.property != 'clear')
    {
      this.selectedFilters.forEach((selectedFilterProperty, index) => {
        if ((selectedFilterProperty != 'four' && selectedFilterProperty != 'five' && selectedFilterProperty != 'clear')
          && selectedFilterProperty != filter.property)
        {
          this.selectedFilters.splice(index, 1);//remove the rest of the selected elemental filters
        }
  
        this.filters.forEach((filterItem, index) =>{
          if ((filterItem.property != 'five' && filterItem.property != 'four' && filterItem.property != 'clear')
            && filterItem.selected){
              this.filters[index].selected = !this.filters[index].selected;//remove the rest of the selected elemental filters at 'Filters:' tab
          } 
        });
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

    this.filterCharacterList();

    // setTimeout(() => { this.loader.hide(); }, 100)
  }
  
  filterCharacterList(){
    let selectedFilters = this.filters.filter(x => x.selected);
    this.cardList = this.cardListBase;

    selectedFilters.forEach((filterItem, index) => 
    {
      if (filterItem.property == 'clear'){
        this.cardList = this.cardListBase;
        this.selectedFilters.splice(0, this.selectedFilters.length);

        this.filters.forEach((filterItem, index) => {
          filterItem.selected = false;
        });
      }

      if (filterItem.property == 'four' && filterItem.selected){
        this.cardList = this.cardList.filter(x => !x.isFiveStar);
      }

      if (filterItem.property == 'five' && filterItem.selected){
        this.cardList = this.cardList.filter(x => x.isFiveStar);
      }

      if ((filterItem.property != 'four' && filterItem.property != 'five' && filterItem.property != 'clear')
        && filterItem.selected){
        this.cardList = this.cardList.filter(x => x.element == filterItem.property);
      }
    });
  }
  //#endregion

  getTeams(){
    this.service.getTeams(this.selectedCharacters).subscribe(res => {
      console.log(res);
    })
  }
}
