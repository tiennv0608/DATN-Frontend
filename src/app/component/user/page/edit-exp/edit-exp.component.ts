import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Exp} from "../../../../model/exp";
import {ExpService} from "../../../../service/exp.service";
import firebase from "firebase";
import User = firebase.User;
import {TokenService} from "../../../../service/token.service";

@Component({
    selector: 'app-edit-exp',
    templateUrl: './edit-exp.component.html',
    styleUrls: ['./edit-exp.component.scss'],
    standalone: false
})
export class EditExpComponent implements OnInit {
user: User[] = [];
  exp: Exp | undefined;
  id: string | undefined;
  constructor(private expService: ExpService, private ac: ActivatedRoute, private token: TokenService) {
  }
  expForm: UntypedFormGroup = new UntypedFormGroup({
    skill: new UntypedFormControl('',[Validators.required]),
    year: new UntypedFormControl('',[Validators.required]),
    salary: new UntypedFormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.ac.paramMap.subscribe(paramMap => {
       // @ts-ignore
      this.id = paramMap.get('id');
      // @ts-ignore
      this.expService.getById(this.id).subscribe(result => {
          this.exp = result;
          this.expForm = new UntypedFormGroup({
            skill: new UntypedFormControl(this.exp.skill,[Validators.required]),
            year: new UntypedFormControl(this.exp.year,[Validators.required]),
            salary: new UntypedFormControl(this.exp.salary,[Validators.required])
          });
          // console.log(result);
        }, error => {
          console.log(error);
        }
      );
    });
    this.exp = {
      skill: 'hello',
      year: 'hello',
      salary: 'hello'
    }
  }
  updateExp(){
    const user_id = this.token.getToken().id;
    const exp = {
      skill: this.expForm.value.skill,
      year: this.expForm.value.year,
      salary: this.expForm.value.salary,
      user: this.user = {
        // @ts-ignore
        id: user_id
      }
    }
    console.log(exp)

    // @ts-ignore
    this.expService.update(this.id,exp).subscribe(abc =>{
      alert('Edit Ok')
      history.back()
    })
  }
}
