import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  title = 'Королёв Алексей, ТвГТУ';
  year = 2023;

  constructor() {}

  ngOnInit(){
  }

}