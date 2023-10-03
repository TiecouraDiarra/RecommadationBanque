import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-detailbanque',
  templateUrl: './detailbanque.component.html',
  styleUrls: ['./detailbanque.component.scss']
})
export class DetailbanqueComponent implements OnInit, AfterViewInit {

  selectedTab: string = 'home'; // Déclaration de la variable selectedTab avec la valeur par défaut 'home'
  
  constructor() { }

  
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
  }


  // Méthode pour changer l'onglet sélectionné
  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  // Méthode pour vérifier si un onglet est actif
  isTabActive(tab: string): boolean {
    return this.selectedTab === tab;
  }

}
