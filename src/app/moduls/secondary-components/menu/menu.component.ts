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
          { label: 'Мой профиль', icon: 'pi pi-fw pi-users', routerLink: '' },
          { label: 'Войти в аккаунт', icon: 'pi pi-fw pi-user-plus', routerLink: '' }
          ]
      },
      {
        label: 'Обучение',
        items: [
          { label: 'Темы и разделы', icon: '', routerLink: '' },
          { label: 'Задания после раздела', icon: '', routerLink: '' }
        ]
      },
      {
        label: 'Тестовые задания',
        items: [
          { label: 'Экзамен', icon: '', routerLink: '' },
          { label: 'Марафон', icon: '', routerLink: '' }
        ]
      },
      {
        label: 'Полезная информация',
        items: [
          { label: 'Правила дорожного движения', icon: '', routerLink: '' },
          { label: 'Информация об экзамене', icon: '', routerLink: '' },
          { label: 'Дополнительные сведения', icon: '', routerLink: '' }
        ]
      },
      {
        label: 'fake-backend',
        items: [
          { label: 'Users', routerLink: '/users'}
        ]
      }
    ]
  }
}
