import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpiration: string;
}

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
  providedIn: 'root',
})
export class AuthService {
  // apiKey = "AIzaSyAgf7dwf83h2itaU0ogPPIy-12CzH1ceRo";
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
  loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;

  currentUser = new BehaviorSubject<User | null>(null);
  userToken: string = '';

  private tokenExpireTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signupUrl, {
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
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
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
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    //serialize user
    localStorage.setItem(
      environment.userDataLocalStorageKey,
      JSON.stringify(formUser)
    );

    this.autoSignOut(expiresIn * 1000);
  }

  signOut() {
    this.currentUser.next(null);

    localStorage.removeItem(environment.userDataLocalStorageKey);

    if (this.tokenExpireTimer) clearTimeout(this.tokenExpireTimer);

    this.router.navigate(['auth']);
  }

  autoSignIn() {
    console.log('auto sign in');
    const userData: UserData = JSON.parse(
      localStorage.getItem(environment.userDataLocalStorageKey) ?? ''
    );

    console.log(userData);

    if (!userData) return;

    const { email, id, _token, _tokenExpiration }: UserData = userData;
    const loadedUser = new User(email, id, _token, new Date(_tokenExpiration));

    console.log(loadedUser);

    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
    }
    console.log(this.userToken);
  }

  autoSignOut(expireDuration: number) {
    console.log('Expire Duration: ', expireDuration);
    this.tokenExpireTimer = setTimeout(this.signOut, expireDuration);
  }
}
