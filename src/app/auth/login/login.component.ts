import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  year = new Date().getFullYear();
  public Toggledata = true;
  type = true;
  User: any;
  roles: string[] = [];
  showPassword = false;

  togglePassword() {
  this.showPassword = !this.showPassword;
}


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  form: any = {
    email: null,
    password: null,
  };

  constructor(
    public router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.path();
    }
   
  }

  path() {
    this.router.navigate(["/index-six"]);
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  seConnecter(form: NgForm): void {
    const { email, password } = this.form;

    this.authService.connexion(email, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
        // this.path();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
