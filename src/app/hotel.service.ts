import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e79b4f917314d0016133404.mockapi.io/hotetels';
@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
  getHotelById(hotelId): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.get<any>(url);
  }
  removeHotelById(hotelId): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.delete<any>(url);
  }
  addNewHotel(hotelObject): Observable<any>{
    return this.http.post<any>(apiUrl, hotelObject);
  }

  updateHotel(hotelObject): Observable<any>{
    let url = `${apiUrl}/${hotelObject.id}`;
    return this.http.put<any>(url, hotelObject);
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
