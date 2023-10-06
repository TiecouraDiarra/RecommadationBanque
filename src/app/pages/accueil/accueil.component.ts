import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BanquesService } from 'src/app/services/banques/banques.service';
import { environment } from 'src/environments/environment';

const URL_PHOTO: string = environment.Url_PHOTO;


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  currentSection = 'home';
  banque: any
  banqueT: any


  constructor(
    private modalService: NgbModal,
    private router: Router,
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

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
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
