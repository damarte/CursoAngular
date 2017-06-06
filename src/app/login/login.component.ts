import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''; // 'damarte86@gmail.com';
  password = ''; // 'prueba';

  error = '';

  constructor(public auth: AuthenticationService, public router: Router) {
    if (this.auth.loggedIn) {
      this.router.navigate(['condicionales']);
    }
  }

  ngOnInit() {
  }

  onLogin(event) {
    event.preventDefault();

    this.auth.login(this.username, this.password).subscribe(
      user => {
        console.log(user);
        this.router.navigate(['condicionales']);
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }
}
