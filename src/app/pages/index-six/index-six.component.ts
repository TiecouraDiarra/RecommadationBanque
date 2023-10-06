import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
// @ts-ignore
import Typed from 'typed.js/src/typed.js';

@Component({
  selector: 'app-index-six',
  templateUrl: './index-six.component.html',
  styleUrls: ['./index-six.component.scss']
})
export class IndexSixComponent implements OnInit {
  // currentSection = 'home';
  isMenuOpen = false;
  menuId = 'navbarSupportedContent';
  User: any
  isLoggedIn = false;
  isLoginFailed = true;
  errorMessage = '';



  constructor(
    private serviceUser: UserService,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else if (!this.storageService.isLoggedIn()) {
      this.isLoginFailed = false;
    }
    //AFFICHER LES INFORMATIONS DE USER CONNECTE
    this.serviceUser.AfficherInfoUserConnecte().subscribe(data => {
      this.User = data;
    }
    );
  }

  ngOnInit(): void {
    const options = {
      strings: [
        "recommandations", "suggestions", "selections", "assurances"],
      typeSpeed: 100,
      backSpeed: 20,
      showCursor: false,
      loop: true
    };
    new Typed('.typed-element', options);

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else if (!this.storageService.isLoggedIn()) {
      this.isLoginFailed = false;
    }

    //AFFICHER LES INFORMATIONS DE USER CONNECTE
    this.serviceUser.AfficherInfoUserConnecte().subscribe(data => {
      this.User = data;
    }
    );
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar') as HTMLElement;
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }

    const mybutton = document.getElementById("back-to-top") as HTMLElement;
    if (mybutton) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

  /**
   * Toggle navbar
   */
  // toggleMenu() {
  //   document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  // }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Profil() {
  //   document.getElementById('AfficherProfil')?.classList.toggle('show');
  // }
  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  // onSectionChange(sectionId: string) {
  //   this.currentSection = sectionId;
  // }

  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      // title: 'Etes-vous sûre de vous déconnecter?',
      text: "Etes-vous sûre de vous déconnecter?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().subscribe({
          next: res => {
            // console.log(res);
            this.storageService.clean();
            this.router.navigateByUrl("/auth/connexion")
          },
          error: err => {
            // console.log(err);
          }
        });
      }
    })

  }
}
