import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isClicked = false;

  constructor(private authService: AuthService) {}

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
  }
}
