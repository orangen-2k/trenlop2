import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e79b4f917314d0016133404.mockapi.io/hotetels';
@Injectable()
export class SchoolsService {

  constructor(private http: HttpClient) { }

  getSchools(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
  getSchoolById(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}`;
    return this.http.get<any>(url);
  }
  removeSchoolById(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}`;
    return this.http.delete<any>(url);
  }
  addNewSchool(schoolsId): Observable<any>{
    return this.http.post<any>(apiUrl, schoolsId);
  }

  updateSchool(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId.id}`;
    return this.http.put<any>(url, schoolsId);
  }
 getClass(schoolsId): Observable<any> {
     let url = `${apiUrl}/${schoolsId}/rooms`;
    return this.http.get<any>(url);
  }
  getClassById(schoolsId, classId): Observable<any> {
    let url = `${apiUrl}/${schoolsId}/rooms/${classId}`;
    return this.http.get<any>(url);
  }
  removeClass(classId, schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}/rooms/${classId}`;
    return this.http.delete<any>(url);
  }
  addClass(schoolsId, classId): Observable<any> {
    let url = `${apiUrl}/${schoolsId}/rooms`;
    return this.http.post<any>(url, classId);
  }
  updateClass(schoolsId, classId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}/rooms/${classId.id}`;
    return this.http.put<any>(url, classId);
  }
}
