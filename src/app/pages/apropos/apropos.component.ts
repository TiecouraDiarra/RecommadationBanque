import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit {

  selectedTab: string = 'home';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
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
