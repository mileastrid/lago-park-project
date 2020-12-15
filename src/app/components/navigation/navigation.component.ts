import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
auth=false;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {

const item = localStorage.getItem('auth');


var header = {
  headers: new HttpHeaders()
    .set('Authorization',  `bearer ${item}`)
}

    this.http.post('https://lago-park-api-project.herokuapp.com/auth', {},{
   headers: {'Authorization': `bearer ${item}`}
} ).subscribe((res:any) => {
  this.auth = res.auth;
          });
  }

  logOut(): void {

localStorage.removeItem('auth');

this.router.navigateByUrl('/login');
  }

}
