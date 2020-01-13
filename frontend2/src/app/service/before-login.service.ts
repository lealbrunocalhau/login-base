import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeforeLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.Token.loggedIn()
  }

  constructor(private Token: TokenService) { }

}
