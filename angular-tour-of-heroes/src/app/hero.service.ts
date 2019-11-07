import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
      

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched Heros:');
        return of(HEROES);
    }
    constructor(private messageService: MessageService) { }
}
