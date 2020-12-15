import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  @ViewChild('inputEmail') inputEmail: any;
  @ViewChild('inputPassword') inputPassword: any;

  onSubmit(): void {
    if (
      this.inputEmail.nativeElement.value != '' ||
      this.inputPassword.nativeElement.valuee != ''
    ) {
      this.http
        .post('https://lago-park-api-project.herokuapp.com/signup', {
          email: this.inputEmail.nativeElement.value,
          password: this.inputPassword.nativeElement.value,
        })
        .subscribe(
          (res: any) => {
            localStorage.setItem('auth', res.token);
            this.router.navigateByUrl('/menu');
          },
          (error: any) => {
            window.location.reload();
          }
        );
    } else {
      console.log('no se puede');
    }
    this.router.navigateByUrl('/menu');
  }

  ngOnInit(): void {}
}
