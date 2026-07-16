import { Component, inject, signal } from '@angular/core';
import { buttonConfig, users } from '../../utils/util';         // import users from until
import { Router, RouterLink } from '@angular/router';
import { About } from '../about/about';
import { Button } from '../../shared/button/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // auth servive
  private authService = inject(AuthService);
  userName = this.authService.userName;
  // 
  textVal = signal<string>("Hello from parent")
  user = users;

  buttonConfig = buttonConfig;
  public router = inject(Router);


  logout() {
    this.authService.currLoggedInUser.set({
      name: '',
      pass: '',
      currLoggedInUserStatus: false,
    });
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
  }

  
  ngOnInit(){
  console.log("c%Child NgOnInit", "color: green;");
}

ngOnChanges(){
  console.log("pC");
}

ngOnDestory(){
  console.log("pD");
}
  
updateText(){
  this.textVal.set("djwwjsh");
}
buttonFn() {
  console.log('Button clicked!');
}
}


