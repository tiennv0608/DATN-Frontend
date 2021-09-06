import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gender} from '../model/post/gender';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gender[]> {
    return this.http.get<Gender[]>(environment.API_URL+'/cities');
  }
}
