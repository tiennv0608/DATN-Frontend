import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
const API_URL = 'http://localhost:8080/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUser(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URL, user);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL+`/list`);
  }

  getById(id: string | null): Observable<User>{
    return this.httpClient.get<User>(API_URL + `/${id}`);
  }
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL + `/${id}`, user);
  }
  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(API_URL + `/${id}`);
  }
}
