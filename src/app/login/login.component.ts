import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username:string;
   password:string;
   msg:string;   
  constructor() { }

  ngOnInit(): void {
      this.msg='';
  }

  formSubmit(data:any){
       if(data.valid){
         alert('welcome to dashboard page')
        this.msg='';
        }else{
         this.msg='PLEASE ENTER USERNAME AND PASSWORD1';
       }
    
  }

}
