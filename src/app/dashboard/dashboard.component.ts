import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
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
    this.heroes = heros.slice(0, 5)
  } 
   
}