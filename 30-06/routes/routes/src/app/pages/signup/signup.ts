import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [Button],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  route = inject(Router);

buttonConfig = buttonConfig;
  userName = "";
  password = "";
  
  passwordToggle = false;

  obj = {
    name: "heloo",
    pass: "hrllo",
    // is: false,
  }

  userLogIn(){
    // console.log("User Logged in");
    const userloginData ={
      name: this.userName,
      pass: this.password,
      currLoggedInUserStatus: false
    }
    

    if(this.userName.trim().length > 3 && this.password.trim().length > 3) {
      localStorage.setItem("userDetails", JSON.stringify(userloginData));
      this.route.navigate(['/login']);
    }else {
      return;
    }
    // console.log(this.userName, this.password);
    // localStorage.setItem("myCat", "Tom");

  }

  // localStorage(){
  //   localStorage.setItem(this.userName, this.password);
  //   console.log("stored");
  // }
  

}
