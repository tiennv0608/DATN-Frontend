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
  message: any;

  constructor(private router: Router) {
    console.log(router.getCurrentNavigation());
  }

  ngOnInit(): void {
    const data = localStorage.getItem('search');
    console.log(data);
    if (data !== null) {
      this.posts = JSON.parse(data);
    }
  }

  viewDetail(id: any) {
    this.router.navigateByUrl('/posts/view/' + id);
  }
}
