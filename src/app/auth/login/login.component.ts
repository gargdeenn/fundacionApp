import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void {
    this.isLoading = true;
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/main');
    },
    error => {
      this.isLoading = false;
      alert('Correo o contraseña incorrecta!')
    }
  )}
}
