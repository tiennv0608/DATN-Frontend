import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../service/post/post.service';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  allPost: any;
  totalElements = 0;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.countPosts();
    this.getAllPostPage({page: 0, size: 6});
  }

  // tslint:disable-next-line:typedef
  getAllPostPage(request: any){
    console.log(request);
    this.postService.getAllPosts(request).subscribe((data: any) => {
      this.allPost = data.content;
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  nextPageAll(event: PageEvent) {
    const request = {};
    // @ts-ignore
    request.page = event.pageIndex.toString();
    // @ts-ignore
    request.size = event.pageSize.toString();
    this.getAllPostPage(request);
  }
  // tslint:disable-next-line:typedef
  private countPosts() {
    // tslint:disable-next-line:variable-name
    this.postService.countPosts().subscribe(number => {
      console.log('num:' + number);
      this.totalElements = (number as number);
    });
  }

}
