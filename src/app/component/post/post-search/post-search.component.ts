import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  allPost: any;


  constructor(router: Router) {
    console.log(router.getCurrentNavigation());
  }

  ngOnInit(): void {
    const data = localStorage.getItem('search');
    console.log(data);
    if (data !== null){
      this.allPost = JSON.parse(data);
      // localStorage.removeItem('search');
    }
  }
}