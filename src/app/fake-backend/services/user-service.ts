import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'api/users';

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.url}/${userId}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: number): Observable<User> {
    const url = `${this.url}/${userId}`;
    return this.http.delete<User>(url);
  }
}