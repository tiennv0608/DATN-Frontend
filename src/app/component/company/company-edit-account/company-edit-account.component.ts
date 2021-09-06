import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-company-edit-account',
  templateUrl: './company-edit-account.component.html',
  styleUrls: ['./company-edit-account.component.scss']
})
export class CompanyEditAccountComponent implements OnInit {
  email?: string = '';
  companyName?: string = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  passwordForm = new FormGroup({});
  currentCompany?: Company = {};

  constructor(private tokenService: TokenService,
              private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getInfo();
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmedPassword: new FormControl('', [Validators.required])
    });
    const id = this.tokenService.getToken().id;
    this.findById(id);
  }

  getInfo() {
    const id = this.tokenService.getToken().id;
    this.companyService.findById(id).subscribe(company => {
      this.companyName = company.companyName;
      this.email = company.email;
    }, error => {
      console.log(error);
    });
  }

  findById(id: string) {
    this.companyService.findById(id).subscribe(company => {
      this.currentCompany = company;
    }, error => {
      console.log(error);
    });
  }

  changePassword() {
    const id = this.tokenService.getToken().id;
    console.log(this.currentCompany?.password)
    console.log(this.passwordForm.value.password)
    if (this.passwordForm.value.password === this.currentCompany?.password) {
      localStorage.setItem('message', 'Mật khẩu trùng với mật khẩu cũ');
      this.router.navigate(['companies/account']);
    } else {
      const company = {
        password: this.passwordForm.value.password,
      };
      this.companyService.update(id, company).subscribe(company => {
        localStorage.setItem('message', 'Đổi mật khẩu thành công');
        this.router.navigate(['companies/account']);
      }, error => {
        console.log(error);
      });
    }
  }

  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

}
