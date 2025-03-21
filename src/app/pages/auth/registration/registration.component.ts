import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../services/user.service';
import { IUserRegister } from '../../../models/user';
import { MessageService } from 'primeng/api';


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

  constructor(private userService: UserService,
    private messageService: MessageService){}
  ngOnInit(): void{

  }
  onAuth(event: Event): void {
    const postObj = {
      login: this.login,
      password: this.password,
      email: this.email
    } as IUserRegister

  this.userService.registerUser(postObj).subscribe({
    next: () => { 
      this.initToast('success', 'Регистрация прошла успешно');
    },
    error: () => {  
      this.initToast('error', 'Произошла ошибка');
    }
  });
  }

  initToast(type: 'error' | 'success', text: string): void{
    this.messageService.add({ severity: type, detail: text, life: 3000});
  }
}
