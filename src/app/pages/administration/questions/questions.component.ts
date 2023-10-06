import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  searchTextQuestion: any;
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
