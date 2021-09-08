import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../../model/post/post';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  posts: Post[] = [];
  page = 1;

  constructor(private router: Router) {
    console.log(router.getCurrentNavigation());
  }

  ngOnInit(): void {
    const data = localStorage.getItem('search');
    console.log(data);
    if (data !== null){
      this.posts = JSON.parse(data);
      // localStorage.removeItem('search');
    }
  }
}
