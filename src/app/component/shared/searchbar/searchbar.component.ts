import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../service/category/category.service';
import {CityService} from '../../../service/city/city.service';
import {SalaryService} from '../../../service/salary/salary.service';
import {PostService} from '../../../service/post/post.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  keyword = '';
  category = -1;
  city = -1;
  salary = -1;
  categories: any;
  cities: any;
  salaries: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private cityService: CityService,
    private salaryService: SalaryService,
    private postService: PostService,
    private router: Router,
    private httpClient: HttpClient
  ) {
  }


  ngOnInit(): void {
    this.getAllCities();
    this.getAllCategories();
    this.getAllSalaries();

  }

  // tslint:disable-next-line:typedef
  getAllCities(){
    this.cityService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }
  // tslint:disable-next-line:typedef
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  // tslint:disable-next-line:typedef
  getAllSalaries(){
    this.salaryService.getAllSalaries().subscribe((salaries) => {
      this.salaries = salaries;
    });
  }
  // tslint:disable-next-line:typedef
  searchJob(){
    const params: URLSearchParams = new URLSearchParams();
    params.set('keyword', this.keyword);
    // @ts-ignore
    params.set('cat_id', this.category);
    // @ts-ignore
    params.set('city_id', this.city);
    // @ts-ignore
    params.set('salary_id', this.salary);
    console.log(params.toString());
    // @ts-ignore
    this.postService.getSearchedPosts(params).subscribe((data: any ) => {
      console.log(params.toString());
      localStorage.setItem('search', JSON.stringify(data));
      this.router.navigateByUrl('/home/search').then(() => {
        location.reload();
      });
    });
  }
}
