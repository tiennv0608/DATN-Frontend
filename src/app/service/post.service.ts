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
  getAllByIdCompany(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + `/posts/companies/${id}`);
  }
  updateStatus(id: string): Observable<Post> {
    return this.http.get<Post>(environment.API_URL + `/posts/status/${id}`);
  }

  delete(id: string) {
    return this.http.delete(environment.API_URL + `/posts/${id}`);
  }

  getTop5Companies(): Observable<Post> {
    return this.http.get(environment.API_URL + `/posts/get-top-5-companies`);
  }
  // tslint:disable-next-line:typedef
  getSearchedPosts(params: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // @ts-ignore
    return this.http.get(`${environment.baseUrl}/posts/search?` + params.toString());
  }
  // tslint:disable-next-line:typedef
  // getAllPosts(request: any){
  //   const params = request;
  //   console.log('size:' + params);
  //   return this.httpClient.get(`${environment.baseUrl}/posts/findAll`, {params});
  // }
  // tslint:disable-next-line:typedef
  countPosts(){
    // @ts-ignore
    return this.http.get(`${environment.baseUrl}/posts/count`);
  }
  getSuggestedPosts(cat_id:number, id:number){
    console.log(environment.API_URL);
    // @ts-ignore
    return this.http.get(`${environment.API_URL}/posts/${id}/${cat_id}`)
  }
  getNewestPosts() {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/posts/new`);
  }
}
