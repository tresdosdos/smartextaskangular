import { Component, OnInit, Input } from '@angular/core';
import User from '../../user';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.css']
})
export class UserCompanyComponent implements OnInit {
  menuIsOpen: boolean;
  symbol: string;
  @Input() user: User;
  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      this.symbol = '▲';
    } else {
      this.symbol = '▼';
    }
  }
  constructor() { }

  ngOnInit() {
    this.menuIsOpen = false;
    this.symbol = '▼';
  }

}
