import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private adminListPath = './assets/data/AdminUsers.json';

  constructor(private http : HttpClient) {}
  
  getCurrenctUser(){
    return localStorage.getItem("currentUser");
  }
  login(username: string, password: string): Observable<Admin> {
    localStorage.setItem("studentList", JSON.stringify([]));
    return this.http.get<Admin[]>(this.adminListPath).pipe(
      map(admins =>admins.find(d => d.username === username && d.password === password)
    ));
  }
  logout() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem("studentList");
  }
}
