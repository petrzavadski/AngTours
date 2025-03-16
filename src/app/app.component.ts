import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngTours';
}
