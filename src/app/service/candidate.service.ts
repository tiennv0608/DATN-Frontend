import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from '../model/user/cv';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../model/company/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(environment.API_URL + '/candidates');
  }

  save(cv: Cv): Observable<Candidate> {
    return this.httpClient.post<Candidate>(environment.API_URL + '/candidates', cv);
  }
  findByCompanyId(id: any): Observable<Candidate> {
    return this.httpClient.get<Candidate>(environment.API_URL + `/candidates/${id}`);
  }
}
