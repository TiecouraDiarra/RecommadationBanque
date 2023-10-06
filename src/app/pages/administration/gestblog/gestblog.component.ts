import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestblog',
  templateUrl: './gestblog.component.html',
  styleUrls: ['./gestblog.component.scss']
})
export class GestblogComponent implements OnInit {
  p3: number = 1;
  blogT: any
  searchTextBlog: any;
  roles: any[] = [
    { nom: 'Administrateur' },
    { nom: 'Particulier' },
    { nom: 'Investiseur' },
    { nom: 'Entreprise' },
  ];

  constructor(
    private serviceBlog: BlogService,
    private router: Router,
    private storageService: StorageService,
    private serviceUser: UserService,
  ) {
    this.blogT = this.serviceBlog.blogs
  }

  ngOnInit(): void {
  }

  //METHODE PERMETTANT DE SUPPRIMER UN BLOG
  SupprimerBlog(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      // title: 'Etes-vous sûre de vous déconnecter?',
      text: "Etes-vous sûre de suppimer ce blog ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const user = this.storageService.getUser();
        if (user && user.access) {
          // Définissez le token dans le service serviceUser
          this.serviceUser.setAccessToken(user.token);

          // Appelez la méthode SupprimerBanque() avec le contenu et l'ID
          this.serviceBlog.SupprimerBlog(id).subscribe({
            next: (data) => {
              console.log("Blog supprimé avec succès:", data);
              this.popUpConfirmationSuppression();
            },
            error: (err) => {
              // this.errorMessage = err.error.message;
            }
          }
          );
        } else {
          // console.error("Token JWT manquant");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // L'utilisateur a annulé l'action
        const cancelNotification = Swal.fire({
          title: "Action annulée",
          text: "Vous avez annulé la suppression du blog.",
          icon: "info",
          showConfirmButton: false, // Supprime le bouton "OK"
          timer: 2000, // Durée en millisecondes (par exemple, 3000 ms pour 3 secondes)
        });

        // Vous n'avez pas besoin de setTimeout pour fermer cette notification, car "timer" le fait automatiquement après la durée spécifiée.
      }
    })
  }


  //POPUP APRES CONFIRMATION DE SUPPRESSION
  popUpConfirmationSuppression() {
    let timerInterval = 2000;
    Swal.fire({
      position: 'center',
      text: 'Blog supprimé avec succès.',
      title: 'Blog supprimé',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: false,
      // confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      timer: timerInterval, // ajouter le temps d'attente
      timerProgressBar: true // ajouter la barre de progression du temps

    }).then((result) => {
      // Après avoir réussi à supprimer, mettez à jour l'état de la page
    })
  }
}
