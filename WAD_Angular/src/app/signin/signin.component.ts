
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    username: '',
    password: ''
  };
  
  errorMessage = '';

  onSubmit() {
    // TODO: Implement authentication logic
    console.log('Signing in with:', this.user);
    
    // Example validation
    if (this.user.username.trim() === '' || this.user.password.trim() === '') {
      this.errorMessage = 'Username and password are required';
      return;
    }
    
    // Clear error message
    this.errorMessage = '';
    
    // TODO: Add actual authentication logic here
  }
}
