import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

export interface User {
  username?: string
  email: string
  password: string
}

@Injectable()
export class AuthService {
  register (user: User): string {
    let localUser = localStorage.getItem(user.email)
    if (localUser === null) {
      localStorage.setItem(user.email, JSON.stringify(user))
      return "success"
    }
    else return "user already registered"
  }

  login(user: User): string {
    let localUser = localStorage.getItem(user.email)
    if (localUser === null) {
      return "invalid email";
    }
    else if (JSON.parse(localUser).password !== user.password){
      return "invalid password";
    }
    else {
      sessionStorage.setItem('token', 'authenticated');
      return "success"
    }
  }

  isAuthenticated(): boolean {
    if(sessionStorage.getItem('token') === 'authenticated') {
      return true;
    }
    else return false;
  }

  resetPassword(email: string): number {
    let localUser = localStorage.getItem(email)
    if(localUser !== null) {
      let editUser: User = JSON.parse(localUser)
      let newPassword = this.getRandomInt(100000, 999999);
      editUser.password = newPassword.toString();
      localStorage.setItem(email, JSON.stringify(editUser))
      console.log(editUser)
      return newPassword
    }
    return 0
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

