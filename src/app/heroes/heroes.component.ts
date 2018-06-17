import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES } from '../mock'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero:Hero =  {
  //   id:1,
  //   name:'windsom'
  // } 
  heroes= HEROES
  constructor() { }

  ngOnInit() {
    
  }
  // hero = 'Windstrom';
  selectedHero:Hero;

  onSelect(hero:Hero):void {
    this.selectedHero = hero; 
  }

}
