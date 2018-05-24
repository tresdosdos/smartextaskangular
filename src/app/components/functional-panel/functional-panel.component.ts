import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-functional-panel',
  templateUrl: './functional-panel.component.html',
  styleUrls: ['./functional-panel.component.css']
})
export class FunctionalPanelComponent implements OnInit {
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
