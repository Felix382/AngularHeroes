import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes
        );
    }
    ngOnInit() {
        this.getHeroes();
    }
    constructor(private heroService: HeroService) { }

}
