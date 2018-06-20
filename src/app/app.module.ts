import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //引入的双向绑定

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //引入的根组件
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations:[
    AppComponent,//当前项目运行的组件
      MessageComponent,
      HeroesDetailComponent,
      HeroesComponent
    // HeroesDetailComponent
  ],  
  imports: [
    BrowserModule,//引入当前模块运行依赖的其他模块
    FormsModule
  ],
  providers: [],//添加服务
  bootstrap: [AppComponent]//主视图  一般为根组件
})

//根模块啥也不需要导出但是必须写
export class AppModule { }
