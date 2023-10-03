import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  year = new Date().getFullYear();

  formEmail: any = {
    email: null,
  };

  constructor(
    public router: Router,
    private serviceUser: UserService
  ) { }

  ngOnInit(): void {
  }

  EnvoieMailForChangePassword() {
    const { email } = this.formEmail;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: '',
        cancelButton: '',
      },
      heightAuto: false
    })
    this.serviceUser.forgotPassword(email).subscribe((data) => {
      swalWithBootstrapButtons.fire(
        "",
        `<h1 style='font-size: 1em !important; font-weight: bold; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'>${data.message}</h1>`,
        "success"
      );
    }, (error) => {
      const errorMessage = error.errorw && error.error.message ? error.error.message : 'Erreur inconnue';
      
      swalWithBootstrapButtons.fire(
        "",
        `<h1 style='font-size: 1em !important; font-weight: bold; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'>${errorMessage}</h1>`,
        "error"
      );
    }
    )

  }
}
