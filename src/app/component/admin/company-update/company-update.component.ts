import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../../service/company.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {
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
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.findById(id);
  }

  findById(id: string) {
    return this.companyService.findById(id).subscribe(company => {
      this.image = company.image;
      this.infoEditForm = new UntypedFormGroup({
        companyName: new UntypedFormControl(company.companyName, [Validators.required]),
        shortName: new UntypedFormControl(company.shortName),
        // email: new FormControl(company.email, [Validators.required]),
        // password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        // confirmedPassword: new FormControl('', [Validators.required]),
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
    const id = this.activatedRoute.snapshot.params.id;
    const company = {
      companyName: this.infoEditForm.value.companyName,
      shortName: this.infoEditForm.value.shortName,
      // email: this.infoEditForm.value.email,
      // password: this.infoEditForm.value.password,
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
    const id = this.activatedRoute.snapshot.params.id;
    this.router.navigate(['/admin/company-info/'+id]);
  }

}
