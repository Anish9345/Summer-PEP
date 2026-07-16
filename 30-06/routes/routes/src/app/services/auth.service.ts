import { inject, Injectable, Service, signal } from '@angular/core';
import { Router } from '@angular/router';
import { buttonConfig } from '../utils/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public currLoggedInUser = signal({} as any);

  private route = inject(Router);

  // if(Auth.currLoggedInUser()?.)


  userName = '' as any;
  password = '' as any;

  passwordToggle = false;   // save

  userLogIn(name?: string, password?: string, isLog?: string) {
  // this.userName = name;
  // this.password = password; 

    console.log('userName', this.userName);
    console.log('password', this.password);
    // console.log('password', this.isLoggedIn);     // save

    if ((this.userName === this.currLoggedInUser()?.name && this.password === this.currLoggedInUser()?.pass)) {
      console.log('login success');
      console.log(this.userName, this.password);
      return true;
      // this.route.navigate(['/home']); 
    } else {
      console.log('login failed');
      return false;
      // this.route.navigate(['/signup']);
    }
  }

}
