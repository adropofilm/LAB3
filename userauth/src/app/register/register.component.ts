import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userData = {}
  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit() {
  }

  createUser() {
    this._auth._createUser(this.userData).subscribe(
      response => this.router.navigate(['dashboard']),
      error => console.log(error)
    )
  }
}
