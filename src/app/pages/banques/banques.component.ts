import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BanquesService } from 'src/app/services/banques/banques.service';
import { environment } from 'src/environments/environment';

const URL_PHOTO: string = environment.Url_PHOTO;

@Component({
  selector: 'app-banques',
  templateUrl: './banques.component.html',
  styleUrls: ['./banques.component.scss']
})
export class BanquesComponent implements OnInit {
  public Toggledata = true;
  public ToggledataC = true;
  public ToggledataO = true;

  searchTextPays: any;
  searchTextRegion: any;
  searchTextCommune: any;
  p1: number = 1;
  banque: any
  banqueT: any
  selectedValueR: string | any = 'region';
  selectedValue: string | any = 'pays';
  // pays: any =["Mali", 'Senegal'];
  pays: any[] = [
    { nom: 'Mali' },
    { nom: 'Senegal' },
    { nom: 'Algerie' },
  ];
  regions: any = [];
  communes: any = [];
  // region: any = ['Bamako', 'Kayes'];
  region: any[] = [
    { nom: 'Bamako', pays: this.pays[0] },
    { nom: 'Kayes', pays: this.pays[0] },
    { nom: 'Koulikoro', pays: this.pays[0] },
    { nom: 'Dakar', pays: this.pays[1] },
    { nom: 'Thies', pays: this.pays[1] },
    { nom: 'Alger', pays: this.pays[2] },
  ];
  // commune:  any = ['Commune I', 'Commune II'];
  commune: any[] = [
    { nom: 'Commune I', region: this.region[0] },
    { nom: 'Commune II', region: this.region[0] },
    { nom: 'Commune III', region: this.region[0] },
  ];
  favoriteStatus: { [idBanque: number]: boolean } = {};
  favoritedPropertiesCount: { [idBanque: number]: number } = {};

  toggleFavorite(idBanque: number) {
    // Inverser l'état de favori pour le commentaire spécifique
    this.favoriteStatus[idBanque] = !this.favoriteStatus[idBanque];

    // Initialiser le compteur de favoris à 0 s'il n'existe pas déjà pour cet ID de commentaire
    if (!this.favoritedPropertiesCount[idBanque]) {
      this.favoritedPropertiesCount[idBanque] = 0;
    }

    // Mettre à jour le compteur de favoris pour ce commentaire
    if (this.favoriteStatus[idBanque]) {
      this.favoritedPropertiesCount[idBanque]++;
    } else {
      this.favoritedPropertiesCount[idBanque]--;
    }
  }





  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLogleC() {
    this.ToggledataC = !this.ToggledataC;
  }

  iconLogleO() {
    this.ToggledataO = !this.ToggledataO;
  }

  onChange(newValue: any) {
    this.searchTextPays
    this.regions = this.region.filter(
      (el: any) => el.pays.nom == newValue.value
    );
    this.communes = this.commune.filter(
      (el: any) => el.region.nom == newValue.value
    );
  }

  onChangeRegion(newValue: any) {
    this.communes = this.commune.filter(
      (el: any) => el.region.nom == newValue.value
    );
  }
  constructor(
    private serviceBanque: BanquesService,
    private router: Router,
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

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS BANQUE
  goToDettailBanque(id: number) {
    return this.router.navigate(['detail-banque', id])
  }

  // IMAGE PAR DEFAUT DES BIENS
  DEFAULT_IMAGE_URL = './../../../assets/images/banque/bam.png';

  //IMAGE
  generateImageUrl(photoFileName: string): string {
    const baseUrl = URL_PHOTO;
    return baseUrl + photoFileName;
  }

}
