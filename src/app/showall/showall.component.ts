import { Component, OnInit } from '@angular/core';
import { data } from '../Moack'

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  items = data;
page = 1;
pageSize = 10;
  constructor(
    ) { }

  ngOnInit() {
    console.log(this.items);
  }
}