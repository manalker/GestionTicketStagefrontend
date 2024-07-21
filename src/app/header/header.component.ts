import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  login() {
    // redirige vers la page de connexion
    window.location.href = '/login';
  }

  register() {
    // redirige vers la page d'inscription
    window.location.href = '/register';
  }
}

