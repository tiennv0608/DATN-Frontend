import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/province";
import {environment} from "../../environments/environment.prod";
import {Category} from "../model/post/category";
@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Province[]> {
    return this.http.get<Province[]>(environment.API_URL+'/province');
  }
  }

