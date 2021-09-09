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

  // searchAddress(address: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address);
  // }
  //
  // searchExp(exp: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?exp=` + exp);
  // }
  //
  // searchSalary(salary: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?salary=` + salary);
  // }
  //
  // searchTitle(title: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?title=` + title);
  // }
  //
  // searchAddressAndExp(address: string, exp: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address+`&exp=`+exp);
  // }
  //
  // searchAddressAndSalary(address: string, salary: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address+`&salary=`+salary);
  // }
  //
  // searchAddressAndTitle(address: string,title: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address+`&title=`+title);
  // }
  //
  // searchSalaryAndExp(salary: string, exp: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?salary=` + salary+`&exp=`+exp);
  // }
  // searchSalaryAndTitle(salary: string, title: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?salary=` + salary+`&title=`+title);
  // }
  // searchExpAndTitle(exp: string, title: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?exp=` + exp+`&title=`+title);
  // }
  // searchAddressAndSalaryAndExp(address:string,salary: string, exp: string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address+`&salary=`+salary+ `&exp=`+exp);
  // }
  // searchAddressAndSalaryAndExpAndTitle(address:string,salary: string, exp: string,title:string) {
  //   return this.http.get(environment.API_URL + `/posts/search?address=` + address+`&salary=`+salary+ `&exp=`+exp+`&title=`+title);
  // }
  // searchSalaryAndExpAndTitle(salary: string, exp: string,title:string) {
  //   return this.http.get(environment.API_URL + `/posts/search?salary=` + salary+`&exp=`+exp+`&title=`+title);
  // }
  search(params: URLSearchParams): Observable<Post> {
    return this.http.get(environment.API_URL + '/posts/search?' + params.toString());
  }


  getTop5Companies(): Observable<Post> {
    return this.http.get(environment.API_URL + `/posts/get-top-5-companies`);
  }

  // tslint:disable-next-line:typedef
  getSearchedPosts(params: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // @ts-ignore
    return this.http.get(`${environment.baseUrl}/posts/search?` + params.toString());
  }

  countPosts() {
    // @ts-ignore
    return this.http.get(`${environment.baseUrl}/posts/count`);
  }

  getSuggestedPosts(cat_id: number, id: number) {
    console.log(environment.API_URL);
    // @ts-ignore
    return this.http.get(`${environment.API_URL}/posts/${id}/${cat_id}`);
  }

  getNewestPosts() {
    // @ts-ignore
    return this.http.get(`http://localhost:8080/posts/new`);
  }
}
