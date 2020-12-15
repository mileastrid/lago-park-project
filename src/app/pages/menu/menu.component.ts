import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
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
  this.auth = true;

          });
          


  }
}
 