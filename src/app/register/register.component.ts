import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regform:FormGroup;
  constructor() { 
     this.regform=new FormGroup({
      username:new FormControl("",Validators.required),
      pwd: new FormControl("",Validators.required)
     });
  }

  ngOnInit(): void {
  }
  register():void{
    alert('successfully')
  }
}
