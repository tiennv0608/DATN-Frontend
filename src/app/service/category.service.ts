import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post/post';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL+'/categories');
  }
}
