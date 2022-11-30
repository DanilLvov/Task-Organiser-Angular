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
}

