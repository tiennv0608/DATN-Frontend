import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Post} from '../model/post/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + '/posts');
  }

  save(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.API_URL + '/posts', post);
  }

  findById(id: any): Observable<Post> {
    return this.http.get<Post>(environment.API_URL + `/posts/${id}`);
  }

  update(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(environment.API_URL + `/posts/${id}`, post);
  }

  delete(id: string) {
    return this.http.delete(environment.API_URL + `/posts/${id}`);
  }

  getTop5Companies(): Observable<Post> {
    return this.http.get(environment.API_URL + `/posts/get-top-5-companies`);
  }
}
