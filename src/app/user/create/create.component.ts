import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private userService: UserService) { }
  userForm: FormGroup = new FormGroup({
    id: new FormControl('', ([Validators.required])),
    name: new FormControl('', ([Validators.required])),
    email: new FormControl('', ([Validators.required])),
    password: new FormControl('', ([Validators.required])),
    phone: new FormControl('', ([Validators.required])),
    type: new FormControl('', ([Validators.required]))
  });
  ngOnInit(): void {
  }
  createUsers(){
    const user = this.userForm.value;
    console.log(user);
    this.userService.getUser(user).subscribe(() =>{
        alert("Ok");
      },error => {
        console.log(error);
      }
    )
  }
}
