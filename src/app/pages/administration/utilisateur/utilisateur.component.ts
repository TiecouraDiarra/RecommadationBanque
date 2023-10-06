import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  roles: any[] = [
    { nom: 'Administrateur' },
    { nom: 'Particulier' },
    { nom: 'Investiseur' },
    { nom: 'Entreprise' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
