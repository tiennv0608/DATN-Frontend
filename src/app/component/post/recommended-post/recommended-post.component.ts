import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.scss']
})
export class RecommendedPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getRecommendedPosts();
  }

  getRecommendedPosts() {
    this.postService.getRecommendedPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }
}
