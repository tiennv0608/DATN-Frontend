import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {CityService} from '../../../service/city.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
  address = '';
  title = '';
  exp = '';
  salary = '';

  constructor(private postService: PostService,
              private cityService: CityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  searchAdvanced() {
    const params: URLSearchParams = new URLSearchParams();
    // @ts-ignore
    params.set('address', this.address);
    params.set('title', this.title);
    // @ts-ignore
    params.set('salary', this.salary * 1000000);
    params.set('exp', this.exp);
    console.log(params.toString());
    this.postService.search(params).subscribe(data => {
      localStorage.removeItem('search-advanced');
      localStorage.setItem('search-advanced', JSON.stringify(data));
      this.router.navigate(['posts/search-advanced']).then(() => {
        window.location.reload();
      });
    });
  }

}
