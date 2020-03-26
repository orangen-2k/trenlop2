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

  getRooms(): Observable<any>{
    return this.http.get<any>(apiUrl+"/3"+"/rooms");
  }
  getRoomsById(roomId): Observable<any>{
    let url = `${apiUrl+"/3"+"/rooms"}/${roomId}`;
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
}
