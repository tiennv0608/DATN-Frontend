import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Company} from '../../../model/company/company';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  private company:any;

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.company = this.companyService.findById(id).subscribe(resule=>{
        console.log(resule);
      });
    });
  }

}
