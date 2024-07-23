import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  passwordFieldIcon: any = faEye;

  constructor(private router: Router, library: FaIconLibrary) {
    library.addIcons(faEnvelope, faLock, faEye, faEyeSlash);
  }

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/']);
  }

  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordFieldIcon = faEyeSlash;
    } else {
      this.passwordFieldType = 'password';
      this.passwordFieldIcon = faEye;
    }
  }
}
