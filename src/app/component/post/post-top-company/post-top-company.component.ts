import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company/company';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-top-company',
  templateUrl: './post-top-company.component.html',
  styleUrls: ['./post-top-company.component.scss']
})
export class PostTopCompanyComponent implements OnInit {

  posts: Post[] = [];
  // firstPost: Post = {};

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTop5Companies();
  }

  getTop5Companies() {
    this.postService.getTop5Companies().subscribe(posts => {
      // @ts-ignore
      this.posts = posts;
      // this.firstPost = this.posts[0];
      // this.posts.shift();
    },error => {
      console.log(error);
    });
  }

  viewDetail(id: string | undefined) {
    this.router.navigateByUrl('companies/view/'+id)
  }
}
