import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = []
  //初始值

  constructor() { }
  add(message:string){
    this.message.push(message)
  }
  
  clear(){
    this.message = []
  }
  //该对外暴露message缓存 和两个方法
}
