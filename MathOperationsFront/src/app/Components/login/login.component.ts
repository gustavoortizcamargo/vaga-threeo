import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule,
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    CommonModule, 
    HttpClientModule
  ],
  styleUrls: ['./login.component.css'],
  
})


export class LoginComponent {
  credentials = { email: '', password: '',};

  constructor(private authService: AuthService, private router: Router) { }

  fazerLogin(): void {
    this.authService.obterToken(this.credentials)
      .subscribe(
        (response) => { 
          localStorage.setItem('token', response.token);
          this.router.navigate(['/calculadora']);
        },
        (error) => { console.error(error); }
      );
  }
}