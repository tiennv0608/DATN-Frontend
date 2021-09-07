import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {CategoryService} from '../../../service/category/category.service';
import {CityService} from '../../../service/city/city.service';
import {SalaryService} from '../../../service/salary/salary.service';
import {Router} from '@angular/router';
import {error} from 'protractor';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  page = 1;
  keyword = '';
  category = -1;
  city = -1;
  salaries: number[] = [-1, -1];
  categories: any;
  cities: any;

  constructor(private postService: PostService,
              private categoryService: CategoryService,
              private cityService: CityService,
              private salaryService: SalaryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllCategories();
    this.postService.getAll().subscribe(result => {
        for (const post of result) {
          if (post.status) {
            this.posts.push(post);
          }
        }
      }, error => {
        console.log(error);
      }
    );
  }

  getAllCities() {
    this.cityService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  searchJob() {
    const params: URLSearchParams = new URLSearchParams();
    params.set('keyword', this.keyword);
    // @ts-ignore
    params.set('cat_id', this.category);
    // @ts-ignore
    params.set('city_id', this.city);
    // @ts-ignore
    params.set('salary1', this.salaries[0]);
    // @ts-ignore
    params.set('salary2', this.salaries[1]);
    // @ts-ignore
    // console.log( params.set('city_id', this.city));
    // console.log(params.toString());
    // console.log(this.salaries.toString());

    // @ts-ignore
    console.log(params);
    this.postService.getSearchedPosts(params).subscribe((data: any) => {
      // console.log(params.toString());
      // localStorage.setItem('search', JSON.stringify(data));
      console.log(data);
      this.posts = data;
      // this.router.navigateByUrl('/posts/search').then(() => {
      //   location.reload();
      // });
      // @ts-ignore
    }, error => {
      console.log(error);
    });
  }

}
