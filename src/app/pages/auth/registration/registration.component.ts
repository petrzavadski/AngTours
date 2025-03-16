import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-registration',
  imports: [FormsModule, NgClass,InputTextModule, CheckboxModule, ButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  
})
export class RegistrationComponent { 
  login: string;
  password:string;
  repeatPassword:string;
  email:string;
  isRemember:boolean;
  labelText:string = 'Сохранить пользователя в хранилище';

  constructor(private userService: UserService){}
  ngOnInit(): void{

  }
  onAuth(event: Event): void {
  console.log('event',event);
  this.userService.addUser({
    login: this.login,
    password: this.password
  })
  }
}
