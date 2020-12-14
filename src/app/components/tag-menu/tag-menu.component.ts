import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-menu',
  templateUrl: './tag-menu.component.html',
  styleUrls: ['./tag-menu.component.scss'],
})
export class TagMenuComponent implements OnInit {
  @Input() name?: String;
  @Input() mount?: String;
  @Input() image?: String;
  @Input() ingredientes?: Array<String>;
  openTag: boolean = false;

  constructor() {}

  ngOnInit(): void {
   
  }
}
