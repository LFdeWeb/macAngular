import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
//引入上面的模块有什么作用
import { Router } from "@angular/router";
//还没有引入用户模块

@Injectable({
  providedIn: 'root'
})
export class RouteguardServiceService  implements CanActivate {

  constructor(
    private router: Router
  ) { }
  //添加守卫函数
  canActivate(){
    console.log('Canactive is called')
     return true;
  }
  
  
  
}
