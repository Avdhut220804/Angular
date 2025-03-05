
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    // If you have auth service, you could call logout here
    this.router.navigate(['/signin']);
  }
}
