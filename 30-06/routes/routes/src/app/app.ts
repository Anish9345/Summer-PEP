import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Button } from './shared/button/button';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],        // imported nav bar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routes');
  public AuthService = inject(AuthService);

    ngOnInit() {
    // console.log("Hello from ng")
    const userDetails = localStorage.getItem('userDetails');
    const parsedDetails = JSON.parse(userDetails ?? `{}`);
    this.AuthService.currLoggedInUser.set(parsedDetails);
    console.log(this.AuthService.currLoggedInUser());
  }
}
