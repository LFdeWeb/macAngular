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
   //注入服务   声明了一个私有的  heroService 属性 将其标记为一个HeroService注入点
  constructor(private heroService: HeroService) { }

//上面的类型为啥是个文件
  ngOnInit() {
      this.getHeroes()
  }

  heroes: Hero[];
  //
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this)
  }
  //创建函数从服务中获取英雄的数据
  getHeroes(): void {
       //将会返回可观察的数据 Observable是rxjs的一个关键类
       //本节将会试用of函数模拟后台返回的数据
    //this.heroes = this.heroService.getHeroes();
    //由于heroservice中的函数返回值变为可观察的形式，因此这里也应该进行相应的改变
    // console.log(this.heroService.getHeroes();)
 this.heroService.getHeroes()
   .subscribe(heroes => this.heroes = heroes  )
  }
   //此处使用了Observable.subscribe进行了异步

}
