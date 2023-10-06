import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BanquesService } from 'src/app/services/banques/banques.service';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  selectedTab: string = 'home'; // Déclaration de la variable selectedTab avec la valeur par défaut 'home'

  errorMessage: any = '';
  isSuccess: any = false;
  isError: any = false;
  isLoggedIn = false;
  isLoginFailed = true;
  banqueT : any
  blogT: any
  searchTextUser: any;
  searchTextBanque: any;
  searchTextBlog: any;
  searchTextQuestion: any;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;

  id: any;
  roles: any[] = [
    { nom: 'Administrateur' },
    { nom: 'Particulier' },
    { nom: 'Investiseur' },
    { nom: 'Entreprise' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private serviceBanque: BanquesService,
    private serviceBlog: BlogService,
    private router: Router,
    ) { 
    this.banqueT = this.serviceBanque.banques,
    this.blogT = this.serviceBlog.blogs
  }


  ngOnInit(): void {
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
