import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

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
  
  removeSchools(School) {
    let conf = confirm("Bạn muốn xóa trường này?");
    if (conf == true) {
      this.schoolsService.removeSchoolById(School.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
    myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
} 