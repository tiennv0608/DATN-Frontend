import { Component, OnInit } from '@angular/core';
import {ExpService} from "../../../../service/exp.service";
import {Exp} from "../../../../model/exp";
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.scss']
})
export class ListExpComponent implements OnInit {
  id: string | undefined;
  exps: Exp[] = [];
  constructor(private expService: ExpService, private token: TokenService) { }

  ngOnInit(): void {
    this.id = this.token.getToken().id;
    console.log(this.id)
    // @ts-ignore
    this.expService.getAllUser(this.id).subscribe(expList =>{
      // @ts-ignore
      this.exps = expList;
      console.log(expList);
    }, error => {
      console.log(error);
    })
  }
}
