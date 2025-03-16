import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-authorization',
  imports: [FormsModule, NgClass,InputTextModule, ButtonModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
 login: string;
  password:string;

  constructor(private userService: UserService){}

  ngOnInit(): void{

  }
  onLogin(event: Event): void {
  console.log('User existance is ', this.userService.checkUser(this.login));

  console.log('Password is', (this.userService.checkUser(this.login) && this.userService.checkPassword(this.password) === true) ? 'correct' : 'incorrect');
  }
 }

