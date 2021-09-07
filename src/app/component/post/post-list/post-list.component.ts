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

    this.postService.getAll().subscribe(result => {
      for (const post of result) {
        if (post.status){
          this.posts.push(post);
        }
      }
      }, error => {
        console.log(error);
      }
    );
  }


}
