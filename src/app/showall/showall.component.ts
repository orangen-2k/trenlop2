import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../schools.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private schoolsService: SchoolsService
    ) { }

  ngOnInit() {
    this.schoolsService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }

  schools = [];
  array: Array<any>;
  beginPagination(array: Array<any>) {
    this.array = array;
  }
}