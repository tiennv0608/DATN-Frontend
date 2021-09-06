import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  email?: string = '';

  constructor(private tokenService: TokenService,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getEmail()
  }

  getEmail() {
    const id = this.tokenService.getToken().id;
    this.companyService.findById(id).subscribe(company => {
      this.email = company.email;
    }, error => {
      console.log(error);
    });
  }
}
