import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _loginUserURL = "http://localhost:3000/api/login";
  private _createUserURL = "http://localhost:3000/api/register";
  constructor(private http: HttpClient) { }

  _loginUser(user) {
    return this.http.post<any>(this._loginUserURL, user)
  }
  _createUser(user) {
    return this.http.post<any>(this._createUserURL, user)
  }
}
