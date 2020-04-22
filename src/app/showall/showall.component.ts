import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  itemsT = [];

  pageOfItems: Array<any>;

  constructor() {}

  ngOnInit() {
    var arr = Array(40);
    this.itemsT = arr
      .fill({
        id: 0,
        name: 0
      })
      .map((x, i) => ({
        id: i + 1,
        name: `Iteam ${i + 1}`
      }));
  }

  onChangePage(pageOfItems: Array<any>) {
    console.log(pageOfItems);
    this.pageOfItems = pageOfItems;
  }
}