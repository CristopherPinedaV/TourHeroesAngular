import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', points: "90" },
      { id: 12, name: 'Narco', points: "80"  },
      { id: 13, name: 'Bombasto', points:  "86"  },
      { id: 14, name: 'Celeritas', points:  "95"  },
      { id: 15, name: 'Magneta', points: "94 " },
      { id: 16, name: 'RubberMan', points: "97"  },
      { id: 17, name: 'Dynama', points: "98"  },
      { id: 18, name: 'Dr IQ', points: "92"  },
      { id: 19, name: 'Magma' , points: "83" },
      { id: 20, name: 'Tornado', points: "87"  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}