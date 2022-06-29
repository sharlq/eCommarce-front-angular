import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IUser,
  LoginInterface,
  RegisterInterface,
} from '../models/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseurl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  currentUser = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: LoginInterface) {
    return this.http.post(this.baseurl + 'Authentication/login', model).pipe(
      map((user: any) => {
        if (user.data) {
          localStorage.setItem('user', JSON.stringify(user.data));
          this.currentUserSource.next(user.data);
        }
        return user;
      })
    );
  }

  register(model: RegisterInterface) {
    return this.http.post(this.baseurl + 'Authentication/register', model).pipe(
      map((user: any) => {
        if (user.data) {
          localStorage.setItem('user', JSON.stringify(user.data));
          this.currentUserSource.next(user.data);
        }
        return user.data;
      })
    );
  }

  checkIfEmailUsed(email: string) {
    return this.http.get(this.baseurl + 'Authentication/IsEmailUsed/' + email);
  }

  loadCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.currentUserSource.next(userObj);
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
