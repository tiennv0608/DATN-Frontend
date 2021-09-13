import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CvService} from '../../../service/cv.service';
import {Cv} from '../../../model/user/cv';
import {TokenService} from '../../../service/token.service';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {error} from 'protractor';
import {CandidateService} from '../../../service/candidate.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  id: any;
  post: Post = {};
  // @Output()
  // idPost= new EventEmitter<string>();
  idPost: any;
  isApplied: boolean = false;
  message: string = '';

  constructor(private cvService: CvService,
              private tokenService: TokenService,
              private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private candidateService: CandidateService) {
    this.id = this.tokenService.getToken().id;
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.idPost = +param.get('id');
    });
  }

  ngOnInit(): void {
    this.findAllByUserId();
  }

  findAllByUserId() {
    this.cvService.findByUserId(this.id).subscribe(result => {
      // @ts-ignore
      this.cvs = result;
    });
  }

  applyCV(idCV: any) {
    if (this.idPost != '') {
      const candidate = {
        cv: {
          id: idCV
        },
        post: {
          id: this.idPost
        }
      };
      // @ts-ignore
      this.candidateService.save(candidate).subscribe(() => {
        this.message = 'Bạn đã nộp CV thành công!'
        window.location.reload();
      }, error => {
        console.log(error);
        this.message = 'Bạn đã nộp CV thất bại';
      });
    } else {
      this.message = 'Bạn không nộp được CV'
    }

  }
}
