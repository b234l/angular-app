import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'lesson-1-routing/html',
  templateUrl: 'lesson-1-routing.html',
  providers: [MessageService]
})

export class Lesson_1_routing implements OnInit{

  items: MenuItem[] = [];
  activeIndex: number = 0;

  constructor(private router: Router, public messageService: MessageService) { }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }
  
ngOnInit() {
  
  this.items = [
    {
      label: 'Общие положения',
      command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Общие положения', detail: event.item.label }),
      routerLink:'generalities'
    },
    {
      label: 'Дорожное движение',
      command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Дорожное движение', detail: event.item.label })
    },
    {
      label: 'Обязанности водителя',
      command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Обязанности водителя', detail: event.item.label })
    },
    {
      label: 'Термины',
      command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Термины', detail: event.item.label })
    },
    {
      label: 'Задания в конце раздела',
      command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Задания в конце раздела', detail: event.item.label })
    }
  ];

  
  }
}