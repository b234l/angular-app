import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl="http://localhost:3000/users";
  constructor(private http:HttpClient) {

  }

  getUsers() {
    return this.http.get<user[]>(this.baseUrl);
  }

  addUsers(user:user) {
    return this.http.post(this.baseUrl, user);
  }
}