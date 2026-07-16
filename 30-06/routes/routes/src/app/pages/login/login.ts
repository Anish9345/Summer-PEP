import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/util';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private route = inject(Router);
  private AuthService = inject(AuthService);
  buttonConfig = buttonConfig;
  username = '';
  userpass= '';
 
  // passwordToggle = false;

  // currLoggedInUser = {} as any;

  //   ngOnInit(){
  //     this.currLoggedInUser =(localStorage.getItem("userDetails"));
  //     this.currLoggedInUser = JSON.parse(this.currLoggedInUser);
  //     console.log("currLoggedInUser", this.currLoggedInUser);
  //   }

  //   // obj = {
  //   //   name: "heloo",
  //   //   pass: "hrllo"
  //   // }

  //   userLogIn(userName, password){
  //    if(this.userName == this.currLoggedInUser?.name && this.password == this.currLoggedInUser?.pass){
  //     console.log("login success");
  //     this.route.navigate(['/home']);
  //    }else{
  //     console.log("login failed");
  //     this.route.navigate(['/signup']);
  //    }

  //   }

  //   // localStorage(){
  //   //   localStorage.setItem(this.userName, this.password);
  //   //   console.log("stored");
  //   // }

  // logOut() {
  //   this.AuthService.currLoggedInUser.set({});
  //   localStorage.removeItem('userDetails');
  //   this.route.navigate(['/login']);
  // }



  ngOnInit() {
    console.log("hello from ng")
    const userDetails = localStorage.getItem('userDetails');
    const parsedDetails = JSON.parse(userDetails ?? '{}');
    this.AuthService.currLoggedInUser.set(parsedDetails);
    console.log('currLoggedInUser', this.AuthService.currLoggedInUser);
  }

  login() {
    this.AuthService.userName = this.username;
    this.AuthService.password = this.userpass;
    // this.AuthService.isLoggedIn = this.isLog;
    const isLoggedIn = this.AuthService.userLogIn(this.username, this.userpass);   ///
    // ////
    if(isLoggedIn){
      this.AuthService.currLoggedInUser.set({
        name: this.username,
        pass: this.userpass,
        currLoggedInUserStatus: true

      });

      localStorage.setItem("userDetails", JSON.stringify(this.AuthService.currLoggedInUser()));

      this.route.navigate(['/home']);
    }
    // 
    // this.route.navigate(['/home']);                  // redirecting from loging function

  }
}
