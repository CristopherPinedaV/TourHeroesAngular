import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes,  
      this.orderHeroes(this.heroes);

    });
  }

  orderHeroes(heros: Hero[]){ 
    var sortedArray: Hero[] = heros.sort((obj1, obj2) => {
      if (+obj1.points < +obj2.points) {
          return 1;
      }
  
      if (+obj1.points > +obj2.points) {
          return -1;
      }
  
      return 0;
    });
    this.heroes = heros;
  } 
  add(name: string, points: string): void {
    name = name.trim();  
    
    if (!name) { return; }
    if (!points) { return; }
    
    
    this.heroService.addHero({ name, points } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.orderHeroes(this.heroes);
      });
  }

  delete(hero: Hero): void { 
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}