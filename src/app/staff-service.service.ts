import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:8080/api/staffs/';
const basedel = 'http://localhost:8080/api/staff';


@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  
  constructor(private http: HttpClient) { }

  getStaff(id: number): Observable<any> {
    return this.http.get(`${basedel}/${id}`);
  }

  createStaff(staff: Object): Observable<Object> {
    return this.http.post(`${basedel}`, staff);
  }

  updateStaff(id: number, value: any): Observable<Object> {
    return this.http.put(`${basedel}/${id}`, value);
  }

  deleteStaff(id: number): Observable<any> {
    return this.http.delete(`${basedel}/${id}`, { responseType: 'text' });
  }

  getStaffsList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }
}