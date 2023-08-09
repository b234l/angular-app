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
          { label: 'Войти в профиль', icon: 'pi pi-fw pi-users', routerLink: '/login' },
          { label: 'Регистрация', icon: 'pi pi-fw pi-user-plus', routerLink: '/register' }
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
          { label: 'Экзамен', icon: '', routerLink: '/exam' },
          { label: 'Марафон', icon: '', routerLink: '/marathon' }
        ]
      },
      {
        label: 'Полезная информация',
        items: [
          { label: 'Правила дорожного движения', icon: '', routerLink: '/traffic-regulations' },
          { label: 'Информация об экзамене', icon: '', routerLink: '/exam-info' },
          { label: 'Дополнительные сведения', icon: '', routerLink: '/additional-information' }
        ]
      },
      {
        label: 'Development',
        items: [
          { label: 'User', icon: '', routerLink: '/users'},
          { label: 'Questions', icon: '', routerLink: '/questions'}
        ]
      }
    ]
  }
}
