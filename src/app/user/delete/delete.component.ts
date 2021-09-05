import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
    type: new FormControl()
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.userService.getById(id).subscribe(result => {
          this.user = result;
          console.log(result);
          this.userForm = new FormGroup({
            id: new FormControl(this.user.id),
            name: new FormControl(this.user.name),
            email: new FormControl(this.user.email),
            password: new FormControl(this.user.password),
            phone: new FormControl(this.user.phone),
            type: new FormControl(this.user.type)
          });
        },error => {
          console.log(error);
        }
      )
    })
    this.user = {
      id: '1',
      name: 'hello',
      email: 'hello',
      password: 'hello',
      phone: 'hello',
      type: 'hello'
    }
  }
  deleteUser(){
    const user =this.userForm.value;
    console.log('hello');
    console.log(user);
    // @ts-ignore
    this.userService.deleteUser(this.user.id).subscribe(abc =>{
      alert("ok");
      history.back();
    })
  }
}
