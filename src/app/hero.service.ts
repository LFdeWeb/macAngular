import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock';
import { Observable, of } from 'rxjs';
//注入  messageService
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  //添加getHeroes 方法 返回模拟的英雄列表
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('heroService: fetched heroes')
    return of(HEROES);
  }

}
