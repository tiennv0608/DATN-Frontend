import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/token.service';

@Component({
    selector: 'app-company-info-edit',
    templateUrl: './company-info-edit.component.html',
    styleUrls: ['./company-info-edit.component.scss'],
    standalone: false
})
export class CompanyInfoEditComponent implements OnInit {
  infoEditForm: UntypedFormGroup = new UntypedFormGroup({
    companyName: new UntypedFormControl(),
    shortName: new UntypedFormControl(),
    // email: new FormControl(),
    // password: new FormControl(),
    // confirmedPassword: new FormControl(),
    phone: new UntypedFormControl(),
    description: new UntypedFormControl(),
    address: new UntypedFormControl(),
    numberOfStaff: new UntypedFormControl(),
    branch: new UntypedFormControl(),
    linkGoogle: new UntypedFormControl(),
    website: new UntypedFormControl()
  });
  image? = '';
  message = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  isUpdated = false;

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
      this.image = company.image;
      this.infoEditForm = new UntypedFormGroup({
        companyName: new UntypedFormControl(company.companyName, [Validators.required]),
        shortName: new UntypedFormControl(company.shortName),
        phone: new UntypedFormControl(company.phone, [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
        description: new UntypedFormControl(company.description),
        address: new UntypedFormControl(company.address),
        numberOfStaff: new UntypedFormControl(company.numberOfStaff),
        branch: new UntypedFormControl(company.branch),
        linkGoogle: new UntypedFormControl(company.linkGoogle),
        website: new UntypedFormControl(company.website)
      });
    }, error => {
      console.log(error);
    });
  }

  edit() {
    const id = this.tokenService.getToken().id;
    const company = {
      companyName: this.infoEditForm.value.companyName,
      shortName: this.infoEditForm.value.shortName,
      image: this.image,
      phone: this.infoEditForm.value.phone,
      description: this.infoEditForm.value.description,
      address: this.infoEditForm.value.address,
      numberOfStaff: this.infoEditForm.value.numberOfStaff,
      branch: this.infoEditForm.value.branch,
      linkGoogle: this.infoEditForm.value.linkGoogle,
      website: this.infoEditForm.value.website,
    };
    this.companyService.update(id, company).subscribe(company => {
      localStorage.setItem('message', 'Cập nhật thông tin thành công');

    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  onChangeImage($event) {
    this.image = $event;
  }

  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

  reload() {
    this.router.navigate(['companies/info']);
  }
}
