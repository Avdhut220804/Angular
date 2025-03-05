
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'users';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() {}

  signup(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  signin(user: User): boolean {
    const users = this.getUsers();
    const foundUser = users.find(u => 
      u.username === user.username && u.password === user.password
    );
    
    if (foundUser) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  private getUsers(): User[] {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }
}
