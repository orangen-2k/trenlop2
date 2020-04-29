import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools/schools.component';
import { ClasssComponent } from './classs/classs.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SchoolsComponent},
  {path: 'admin', component: ClasssComponent, 
  children:[
    {path: '', redirectTo: 'dashboord', pathMatch: 'full'},
    // {path: 'dashboord', component: BeackoorComponent}
  ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
