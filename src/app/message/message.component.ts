import { Component, OnInit } from '@angular/core';
//引入messageService
import { MessageService } from "../message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) {   }
//angular只会绑定组件的公共属性

  ngOnInit() {
  }

}
