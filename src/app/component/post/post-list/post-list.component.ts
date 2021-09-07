import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  allPost: any;
  totalElements = 0;

  constructor(private postService: PostService, private router: Router) {
  }

  posts: Post[] = [];
  page: number = 1;


  ngOnInit(): void {
    this.countPosts();
    this.getAllPostPage({page: 0, size: 6});
    this.postService.getAll().subscribe(result => {
        for (const post of result) {
          if (post.status) {
            this.posts.push(post);
          }
        }
      }, error => {
        console.log(error);
      }
    );
  }

  getAllPostPage(request: any) {
    console.log(request);
    this.postService.getAllPosts(request).subscribe((data: any) => {
      this.allPost = data.content;
      console.log(data);
    });
  }

  nextPageAll(event: PageEvent) {
    const request = {};
    // @ts-ignore
    request.page = event.pageIndex.toString();
    // @ts-ignore
    request.size = event.pageSize.toString();
    this.getAllPostPage(request);
  }

  private countPosts() {
    this.postService.countPosts().subscribe(number => {
      console.log('num:' + number);
      this.totalElements = (number as number);
    });
  }

}
