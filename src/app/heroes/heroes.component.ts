import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock'   以后使用服务来导入数据
import { HeroService } from '../hero.service'
import { Observable } from 'rxjs';
import { HEROES } from '../mock';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
   selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes()
  }

  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this)
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    // console.log(this.heroService.getHeroes();)
  }
}
