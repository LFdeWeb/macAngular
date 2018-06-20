import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  //添加getHeroes 方法 返回模拟的英雄列表
  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
}
