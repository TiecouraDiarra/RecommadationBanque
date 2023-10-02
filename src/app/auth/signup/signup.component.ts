import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';
// import swal from 'sweetalert';
// import * as feather from 'feather-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  year = new Date().getFullYear();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message: string | undefined;

  public typeUser = [
    "Choisir",
    'PARTICULIER',
    'INVESTISSEUR',
    'ENTREPRISE',
  ];
  public Toggledata = true;
  public ToggledataC = true;
  form: any = {
    nom: null,
    prenom: null,
    email: null,
    password: null,
    confirmPassword: null,
    roles: "Choisir"
  };

  constructor(public router: Router,
    private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    // feather.replace();
  }
  path() {
    this.router.navigate(["/index-six"]);
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLogleC() {
    this.ToggledataC = !this.ToggledataC;
  }
  togglePassword() {
    this.Toggledata = !this.Toggledata;
}

  //METHODE PERMETTANT DE S'INSCRIRE
  inscription(): void {
    if (this.form.password !== this.form.confirmPassword) {
      Swal.fire({
        text: "La confirmation du mot de passe ne correspond pas au nouveau mot de passe.",
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    const { nom, prenom, email, password, roles } = this.form;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    if (this.form.roles == "Choisir") {
      Swal.fire({
        text: "Veuillez choisir le type d'utilisateur!",
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    } else {
      swalWithBootstrapButtons.fire({
        text: "Etes-vous sûre de creer un compte ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmer',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService.inscription(nom, prenom, email, password, roles).subscribe({
            next: (data) => {
              this.isSuccessful = true;
              this.isSignUpFailed = false;
              // this.popUpConfirmation();
            },
            error: (err) => {
              this.errorMessage = err.error.message;
              this.isSignUpFailed = true;
            },
          });
        }
      })
    }
  }

  //POPUP APRES CONFIRMATION
  // popUpConfirmation() {
  //   const messages = [
  //     'Le compte a été envoyé avec succès.',
  //     'Pour vous connecter, allez-y confirmer dans votre mail'
  //   ];
  //   const messageText = messages.join('\n');

  //   Swal.fire({
  //     position: 'center',
  //     text: messageText,
  //     title: 'Creation de compte',
  //     icon: 'success',
  //     heightAuto: false,
  //     showConfirmButton: true,
  //     confirmButtonText: "OK",
  //     confirmButtonColor: '#0857b5',
  //     showDenyButton: false,
  //     showCancelButton: false,
  //     allowOutsideClick: false,

  //   }).then((result) => {
  //     this.form.nom = '',
  //       this.form.prenom = '',
  //       this.form.email = '',
  //       this.form.password = '',
  //       this.form.confirmPassword = '',
  //       this.form.roles = "Type d'Utilisateur",
  //   })
  // }
}
