import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BanquesService } from 'src/app/services/banques/banques.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
declare var google: any;

@Component({
  selector: 'app-detailbanque',
  templateUrl: './detailbanque.component.html',
  styleUrls: ['./detailbanque.component.scss']
})
export class DetailbanqueComponent implements OnInit, AfterViewInit {

  selectedTab: string = 'home'; // Déclaration de la variable selectedTab avec la valeur par défaut 'home'

  errorMessage: any = '';
  isSuccess: any = false;
  isError: any = false;
  isLoggedIn = false;
  isLoginFailed = true;
  id: any;
  banque: any;

  constructor(
    private serviceUser: UserService,
    private storageService: StorageService,
    private banqueService: BanquesService,
    private route: ActivatedRoute,
  ) { }


  ngAfterViewInit() {
    // Options de la carte
    const mapOptions = {
      center: { lat: 12.639232, lng: -7.998184 },
      zoom: 15,
    };

    // Attendre que le DOM soit chargé pour initialiser la carte
    setTimeout(() => {
      const mapElement = document.getElementById("mape");
      const map = new google.maps.Map(mapElement, mapOptions);



      // Créer un marqueur pour l'emplacement
      const marker = new google.maps.Marker({
        position: { lat: 12.639232, lng: -7.998184 },
        map: map,
        title: 'test',
      });
    }, 0); // Utilisation d'un délai de 0 millisecondes pour s'assurer que le DOM est prêt
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    } else if (!this.storageService.isLoggedIn()) {
      this.isLoginFailed = false;
    }
    //RECUPERER L'ID D'UNE BANQUE
    this.id = this.route.snapshot.params["id"]
    //AFFICHER UNE BANQUE EN FONCTION DE SON ID
    this.banqueService.AfficherBanqueParId(this.id).subscribe(data => {
      this.banque = data;
      console.log(this.banque);
    })

  }


  // Méthode pour changer l'onglet sélectionné(Pays)
  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  // Méthode pour vérifier si un onglet est actif(Region)
  isTabActive(tab: string): boolean {
    return this.selectedTab === tab;
  }

}
