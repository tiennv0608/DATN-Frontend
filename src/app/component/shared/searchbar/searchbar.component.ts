import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../service/category/category.service';
import {CityService} from '../../../service/city/city.service';
import {SalaryService} from '../../../service/salary/salary.service';
import {PostService} from '../../../service/post/post.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Post} from '../../../model/post/post';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  keyword = '';
  category = -1;
  city = -1;
  salaries: number[] = [-1, -1];
  categories: any;
  cities: any;
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
  }

  getAllCities(){
    this.cityService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

}
