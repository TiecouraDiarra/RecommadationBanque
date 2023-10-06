import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BanquesService } from 'src/app/services/banques/banques.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const URL_PHOTO: string = environment.Url_PHOTO;


@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.scss']
})
export class BanqueComponent implements OnInit {
  searchTextBanque: any;
  banqueT: any
  banque: any
  p2: number = 1

  roles: any[] = [
    { nom: 'Administrateur' },
    { nom: 'Particulier' },
    { nom: 'Investiseur' },
    { nom: 'Entreprise' },
  ];


  constructor(
    private modalService: NgbModal,
    private router: Router,
    private storageService: StorageService,
    private serviceUser: UserService,
    private serviceBanque: BanquesService
  ) {
    this.banqueT = this.serviceBanque.banques
  }

  ngOnInit(): void {
    //AFFICHER LA LISTE DES BANQUES
    this.serviceBanque.AfficherLaListeBanques().subscribe(data => {
      this.banque = data;
      console.log(this.banque);
    });
  }

  // IMAGE PAR DEFAUT DES BIENS
  DEFAULT_IMAGE_URL = './../../../assets/images/banque/bam.png';

  //IMAGE
  generateImageUrl(photoFileName: string): string {
    const baseUrl = URL_PHOTO;
    return baseUrl + photoFileName;
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS BANQUE
  goToDettailBanque(id: number) {
    return this.router.navigate(['detail-banque', id])
  }

  //METHODE PERMETTANT DE SUPPRIMER UNE BANQUE
  SupprimerBanque(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      // title: 'Etes-vous sûre de vous déconnecter?',
      text: "Etes-vous sûre de suppimer cette banque ?",
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
          this.serviceBanque.SupprimerBanque(id).subscribe({
            next: (data) => {
              console.log("Banque supprimée avec succès:", data);
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
          text: "Vous avez annulé la suppression de la banque.",
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
      text: 'Banque supprimée avec succès.',
      title: 'Banque supprimée',
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
