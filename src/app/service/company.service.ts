import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../model/company/company';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(environment.API_URL+'/companies');
  }

  findById(id: any): Observable<Company> {
    return this.httpClient.get<Company>(environment.API_URL + `/companies/${id}`);
  }

  update(id: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(environment.API_URL + `/companies/${id}`, company);
  }

  delete(id: string) {
    return this.httpClient.delete(environment.API_URL + `/companies/${id}`);
  }
}
