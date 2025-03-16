import { Injectable } from '@angular/core';
import {IUser} from '../../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userStorage: IUser[] = [];
private curentUser: IUser | null = null;

  constructor() { }

  private getUser(login : string): IUser | null {
    return this.userStorage.find((user)=> login === user.login) || null;
  }

  addUser(user: IUser, isRememberMe?: boolean):true | string{
    if(this.getUser(user.login)){
      return 'User already exists';
    }
    this.userStorage.push(user);
    return true;
  }

  checkUser(login:string): boolean {
    return !!this.getUser(login);
  }

  checkPassword(password:string): boolean {
    return !!this.userStorage.find((user)=> password === user.password) || null;
  }

}
