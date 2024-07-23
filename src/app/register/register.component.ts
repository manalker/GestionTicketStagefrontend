import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'MyHelpDesk';

  // Déclarez les variables pour le formulaire
  firstname: string = '';
  lastname: string = '';
  phone: string = '';
  dob: string = '';
  cin: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    console.log('Prénom:', this.firstname);
    console.log('Nom:', this.lastname);
    console.log('Téléphone:', this.phone);
    console.log('Date de naissance:', this.dob);
    console.log('CIN:', this.cin);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
    console.log('Confirmer le mot de passe:', this.confirmPassword);
  }
}
