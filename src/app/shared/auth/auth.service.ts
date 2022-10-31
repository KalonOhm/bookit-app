import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey = "AIzaSyAgf7dwf83h2itaU0ogPPIy-12CzH1ceRo";
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

  currentUser = new BehaviorSubject<User | null>
  (null);
  userToken: string = "";


  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupUrl, {
      email,
      password,
      returnSecureToken: true,
    })
    .pipe(
      tap((res) => {
      const { email, localId, idToken, expiresIn } = res;
      this.handleAuth(email, localId, idToken, Number(expiresIn));
    })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginUrl, {
      email,
      password,
      returnSecureToken: true,
    })
    .pipe(
      tap((res) => {
      const { email, localId, idToken, expiresIn } = res;
      this.handleAuth(email, localId, idToken, Number(expiresIn));
    })
    );
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date( new Date().getTime(), + expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate)
    this.currentUser.next(formUser);

    //serialize user
    localStorage.setItem("userData", JSON.stringify(formUser));
  }

  signOut() {
    this.currentUser.next(null);
    this.router.navigate(['auth']);
  }
}