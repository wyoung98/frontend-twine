import { Component, OnInit } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.router.navigate(['/home'])
  }
}
