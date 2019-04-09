import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {}

  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth._loginUser(this.userData).subscribe(
      response => this.router.navigate(['dashboard']),
      error => console.log(error)
    )
  }
}
