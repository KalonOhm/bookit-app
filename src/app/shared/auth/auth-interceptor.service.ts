import {
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        // Make sure we have a use
        if (!user) return next.handle(req);

        // Modify the req to have access to the token
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });

        return next.handle(modifiedReq);
      })
    );
  }
}
