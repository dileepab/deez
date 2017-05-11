import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoopBackAuth} from '../shared/sdk/services/core/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: LoopBackAuth) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const path: string = next.url[0] ? next.url[0].path : '';
    if (((path === 'login') || (path === 'register')) && this.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    } else if (((path === 'login') || (path === 'register')) && (!this.isAuthenticated())) {
      return true;
    } else if (!((path === 'login') || (path === 'register')) && (!this.isAuthenticated())) {
      this.router.navigate(['/login']);
      return true;
    } else {
      return true;
    }
  }

  isAuthenticated(): string {
    return this.auth.getAccessTokenId();
  }
}
