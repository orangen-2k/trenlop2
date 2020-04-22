import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppComponent } from './app.component';

import { SchoolsComponent } from './schools/schools.component';
import { ClasssComponent } from './classs/classs.component';
import { AddSchComponent } from './add-sch/add-sch.component';
import { SchoolsService } from './schools.service';
import { ShowallComponent } from './showall/showall.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SchoolsComponent},
      {path: 'add', component: AddSchComponent},
      {path: 'show', component: ShowallComponent},
      {path: 'detail1/:schoolsId', component: ClasssComponent},
      {path: 'edit/:id', component: AddSchComponent},
    ])
  ],
  declarations: [ AppComponent, SchoolsComponent, ClasssComponent, AddSchComponent,JwPaginationComponent, ShowallComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ SchoolsService]
})
export class AppModule { }
