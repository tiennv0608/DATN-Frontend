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
  posts: any[] = [];
  page = 1;
  url = "/posts/view/";
  idPost?: string;
  constructor(private postService: PostService,
              private tokenService: TokenService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(this.router.url);
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
      // @ts-ignore
      this.findByCat_id(this.post.category?.id,this.post.id);
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

  findByCat_id(cat_id: number,id: number){
    this.postService.getSuggestedPosts(cat_id,id).subscribe(data => {
        // @ts-ignore
      for (let post of data) {
          if (post.status){
            this.posts.push(post);
          }
        }
      console.log(this.posts);

        // console.log(this.post.category?.id);
        // console.log(data);
      }, error => {
        console.log(error);
      console.log("error");
      }
    );
  }

  //
  // onChangeId($event: string) {
  //   console.log($event);
  // }
}
