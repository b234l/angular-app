import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Профиль',
        icon: 'pi pi-fw pi-users',
        items: [
          { label: 'Мой профиль', icon: 'pi pi-fw pi-users', routerLink: '/sign-in' },
          { label: 'Войти в аккаунт', icon: 'pi pi-fw pi-user-plus', routerLink: '/sign-up' }
          ]
      },
      {
        label: 'Обучение',
        items: [
          { label: 'Темы и разделы', icon: '', routerLink: '/learning' },
          { label: 'Задания после раздела', icon: '', routerLink: '/topic-task' }
        ]
      },
      {
        label: 'Тестовые задания',
        items: [
          { label: 'Экзамен', icon: '', routerLink: '/tasks/exam' },
          { label: 'Марафон', icon: '', routerLink: '/tasks/marathon' }
        ]
      },
      {
        label: 'Полезная информация',
        items: [
          { label: 'Правила дорожного движения', icon: '', routerLink: '/info/traffic-rules' },
          { label: 'Информация об экзамене', icon: '', routerLink: '/info/exam-info' },
          { label: 'Дополнительные сведения', icon: '', routerLink: '/info/additional;' }
        ]
    }
  ]
  }
}
