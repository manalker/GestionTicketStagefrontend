import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin() {
    // Ajoutez ici la logique d'authentification
    // Si l'authentification est réussie, redirigez vers une autre page
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Redirection de démonstration après connexion réussie
    this.router.navigate(['/']); // Modifier selon votre logique de redirection
  }
}
