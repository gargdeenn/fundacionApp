import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any = null;
  sesion: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.sesion = !!(window.localStorage.getItem('ACCESS_TOKEN'));
  }

  logout(){
    this.authService.logout().subscribe(response => {
      this.sesion = response;
      this.user = null;
    });
  }
}
