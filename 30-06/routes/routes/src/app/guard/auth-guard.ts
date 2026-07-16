import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService);
  const router = inject(Router);

    if(Auth.currLoggedInUser()?.currLoggedInUserStatus) {
    // console.log('User is already logged in');
    return true;
  }

  console.log('AuthService', Auth);

  if(Auth.userLogIn()){
    // router.navigate(['/home']);
    return true;
  }
  

    return false;
  

};
