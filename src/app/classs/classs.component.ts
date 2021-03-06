import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {SchoolsService} from '../schools.service';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-classs',
  templateUrl: './classs.component.html',
  styleUrls: ['./classs.component.css']
})
export class ClasssComponent implements OnInit {

   constructor(
    private schoolsService: SchoolsService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private fbuiler: FormBuilder
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolsId = params.get("schoolsId");
      this.schoolsService.getSchoolById(schoolsId).subscribe(data => {
        console.log(data);
        this.schoolsData = data;
      });
      this.schoolsService.getClass(schoolsId).subscribe(data => {
        console.log(data);
        this.classs = data;
      });
    });
  }

  schoolsData = null;
  classs = [];
  classForm = this.fbuiler.group({
    id: new FormControl(null),
    name: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
    hotetelId: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(1),
      Validators.pattern('[0-9]*')
    ]],
    room_number: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(1),
      Validators.pattern('[0-9a-zA-Z]+[0-9a-zA-Z ]*')
    ]],
    total_student: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(1),
      Validators.pattern('[0-9]*')
    ]],
    main_teacher: ["",[
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
});
 
  saveClass() {
    this.classForm.value.schoolId = this.schoolsData.id;
    if (this.classForm.value.id == null) {
      this.schoolsService.addClass(this.schoolsData.id, this.classForm.value).subscribe(data => {
        this.ngOnInit();
      });
    } else {
      this.schoolsService.updateClass(this.schoolsData.id, this.classForm.value).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
    let close = document.getElementById("close");
    close.click();
  }

  removeClass(student) {
    let conf = confirm("Bạn muốn xóa lớp này?");
    if (conf == true) { 
      this.schoolsService.removeClass(student.id, this.schoolsData.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

   editStudent(student) {
    console.log(this.schoolsData.id);
    console.log(student.id);
    this.schoolsService.getClassById(this.schoolsData.id, student.id).subscribe(data => {
        console.log(data);
        this.classForm.setValue(data);
    });
  }
canelClass() {
    this.classForm = this.fbuiler.group({
      id: new FormControl(null),
      name: new FormControl(null),
      hotetelId: new FormControl(null),
      room_number: new FormControl(null),
      total_student: new FormControl(null),
      main_teacher: new FormControl(null),
});
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
check(value){
  for(let err in value.errors){
        if(value.dirty){
          return this.getError(err, value.errors[err]);
        }
    }
}

getError(err, value){
  let messa = {
    'required' : "Không để trống trường dữ liệu",
    'maxlength': `Tối đa là ${value.requiredLength} ký tự`,
    'minlength': `Nhỏ nhất là ${value.requiredLength} ký tự`,
    'pattern': "Sai định dạng"
  }
  return messa[err];
}

get classname (){
  return this.check(this.classForm.controls.name); 
}

get classschoolId (){
  return this.check(this.classForm.controls.hotetelId); 
}

get classroom_number (){
  return this.check(this.classForm.controls.room_number); 
}

get classtotal_student (){
  return this.check(this.classForm.controls.total_student); 
}

get classmain_teacher (){
  return this.check(this.classForm.controls.main_teacher); 
}
}
