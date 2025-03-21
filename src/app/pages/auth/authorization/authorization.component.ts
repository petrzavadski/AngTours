import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../models/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-authorization',
  imports: [FormsModule, NgClass,InputTextModule, ButtonModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent implements OnInit, OnDestroy{
 login: string;
  password:string;

  constructor(private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ){}

  ngOnInit(): void{

  }

  ngOnDestroy():void {}

  onLogin(event: Event): void {
  event.preventDefault();

  const user: IUser = {
    login: this.login,
    password: this.password
  }

  
  this.userService.authUser(user).subscribe({
    next: () => { 
  this.router.navigate(['tickets']);

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

