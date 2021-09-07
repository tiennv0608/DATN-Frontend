import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  page = 1;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = [{
      company: {
        image: ''
      }
    }];
    this.postService.getAll().subscribe(result => {
        this.posts = result;
      }, error => {
        console.log(error);
      }
    );
  }


}
