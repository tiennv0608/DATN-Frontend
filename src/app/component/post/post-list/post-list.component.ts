import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';
import {CandidateService} from '../../../service/candidate.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  page = 1;
  post?: Post;

  constructor(private postService: PostService,
              private router: Router,
              private tokenService: TokenService,
              private candidateService: CandidateService) {
  }

  ngOnInit(): void {

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

  applyCV(idPost: any) {
    const idUser = this.tokenService.getToken().id;
    this.postService.findById(idPost).subscribe(result => {
      this.post = result;
    });
    const candidate = {
      cv: {
        id: 5
      },
      company: {
        // @ts-ignore
        id: this.post.company?.id
      }
    };
    // @ts-ignore
    this.candidateService.save(candidate).subscribe(() => {
      console.log('thành công');
    });
  }
}
