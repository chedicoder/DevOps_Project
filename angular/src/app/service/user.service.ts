import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = `${this.baseURL}/user`;
    return this.http.get<any>(url); 
  }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.baseURL}/user`;
    return this.http.post<any>(url, data, { headers }); 
  }

  DeleteData(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.baseURL}/user/${id}`;
    return this.http.delete<any>(url, { headers }); 
  }
}
