import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

@ViewChild('inputEmail') inputEmail:any;
@ViewChild('inputPassword') inputPassword:any;

  onSubmit():void{
    if(this.inputEmail.nativeElement.value!="" || this.inputPassword.nativeElement.valuee!="")
    {

     this.http.post('https://lago-park-api-project.herokuapp.com/signin',{
    email: this.inputEmail.nativeElement.value,
    password: this.inputPassword.nativeElement.value
}).subscribe((res:any) => {
            localStorage.setItem('auth', res.token);
            window.location.href = '/menu'
          },(error: any)=>{
            window.location.reload()
          });;
    }
    else{
      console.log('no se puede')
    }
  }
  

  ngOnInit(): void {
  }


}
