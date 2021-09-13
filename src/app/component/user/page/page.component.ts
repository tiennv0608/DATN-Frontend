import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from 'src/app/model/user';
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpService} from "../../../service/exp.service";
import {Exp} from "../../../model/exp";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  id: string | undefined;
  user: User | undefined;
  // exps: Exp[] = [];
  // exp: Exp | undefined;
  constructor(private expService: ExpService,
              private userService: UserService,
              private authService: AuthService,
              private token: TokenService,
              private ac: ActivatedRoute
              ) {
  }

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmedPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
  })

  ngOnInit(): void {
    this.id = this.token.getToken().id;
    console.log(this.id);
    // @ts-ignore
    this.userService.findById(this.id).subscribe(result => {
      this.user = result
      console.log(result);
      this.userForm = new FormGroup({
        name: new FormControl(this.user.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
        email: new FormControl(this.user.email,[Validators.required, Validators.email]),
        password: new FormControl(this.user.password, [Validators.required,Validators.minLength(10)]),
        phone: new FormControl(this.user.phone,[Validators.required, Validators.pattern(/^\+84\d{9}$/)])
      })
    }, error => {
      console.log(error);
    })
    this.user = {
      name: '',
      email: '',
      password: '',
      phone: '',
    }
    // console.log(this.id);
    // // @ts-ignore
    //
    // this.expService.getAllUser(this.id).subscribe(expList =>{
    //   // @ts-ignore
    //   this.exps = expList;
    //   console.log(expList);
    // })
  }

  updateUser() {
    const user = this.userForm.value;
    console.log(user);
// @ts-ignore
    this.userService.update(this.id, user).subscribe(result => {
      alert("Update ok");
    }, error => {
      console.log(error);
    })
  }
  // updateExp(){
  //   this.ac.paramMap.subscribe(paramMap => {
  //     const id = paramMap.get('id');
  //     console.log(id);
  //     // @ts-ignore
  //     this.expService.getById(id).subscribe(result => {
  //         this.exp = result;
  //         this.expForm = new FormGroup({
  //           sill: new FormControl(this.exp.id),
  //           year: new FormControl(this.exp.year),
  //           salary: new FormControl(this.exp.salary)
  //         });
  //         // console.log(result);
  //       }, error => {
  //         console.log(error);
  //       }
  //     );
  //   });
  //   this.exp = {
  //     salary: 'hello',
  //     sill: '',
  //     year: ''
  //   }
  // }
}
