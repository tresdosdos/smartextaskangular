import { Component, OnInit, Input } from '@angular/core';
import User from '../../user';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
