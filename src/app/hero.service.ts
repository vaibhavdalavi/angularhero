
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    this.messageService.add('HeroService: fetched heroes 2');
    console.log(HEROES);
    return of(HEROES);
  }

}
