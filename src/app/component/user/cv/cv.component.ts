import {Component, OnInit} from '@angular/core';
import {CvService} from '../../../service/cv.service';
import {Cv} from '../../../model/user/cv';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  id: any;
  constructor(private cvService: CvService,
              private tokenService: TokenService) {
    this.id = this.tokenService.getToken().id;
  }

  ngOnInit(): void {
    this.findAllByUserId();
  }
  findAllByUserId(){
    this.cvService.findByUserId(this.id).subscribe(result=>{
     // @ts-ignore
      this.cvs=result;
    });
  }
}
