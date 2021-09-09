import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../service/post.service';
import {CityService} from '../../../service/city.service';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
  city = -1;
  cities: any;
  title: string = '';
  exp: string = '';
  salary: string = '';

  constructor(private postService: PostService,
              private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(data => {
      this.cities = data;
    })
  }

  searchAdvanced() {
    const params: URLSearchParams = new URLSearchParams();
    // @ts-ignore
    params.set('address', this.city);
    params.set('title', this.title);
    params.set('salary', this.salary);
    params.set('exp', this.exp);
    console.log(params.toString());
    this.postService.search(params).subscribe(data=> {
      console.log(data);
    })
  }

}
