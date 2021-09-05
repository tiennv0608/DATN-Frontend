import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-company-info-edit',
  templateUrl: './company-info-edit.component.html',
  styleUrls: ['./company-info-edit.component.scss']
})
export class CompanyInfoEditComponent implements OnInit {
  infoEditForm: FormGroup = new FormGroup({});

  constructor(private companyService: CompanyService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.tokenService.getToken().id;
    this.findById(id);
  }

  findById(id: string) {
    return this.companyService.findById(id).subscribe(company => {
      console.log(company);
    }, error => {
      console.log(error);
    });
  }

}
