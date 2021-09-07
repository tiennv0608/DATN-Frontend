import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post = {};
  isLogin = false;

  constructor(private postService: PostService,
              private tokenService: TokenService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.findById(id);
      this.checkLogin();
    });
  }

  // tslint:disable-next-line:typedef
  findById(id: string) {
    this.postService.findById(id).subscribe(post => {
      this.post = post;
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  checkLogin() {
    if (this.tokenService.getToken().token !== '') {
      this.isLogin = true;
    }
  }

}
