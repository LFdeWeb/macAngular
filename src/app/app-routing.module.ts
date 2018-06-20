import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//此处基本不用可以删除
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';

const routes: Routes = [
  { path: 'dashbord', component: DashbordComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroesDetailComponent},

  { path: '', redirectTo: '/dashbord', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)//初始化路由器
  ],
  exports: [ RouterModule ]
  // declarations: []//基本不会在此处声明组件可以删除了
})
export class AppRoutingModule { 
 
}
