import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

const URL_BASE: string = environment.Url_BASE;

@Injectable({
  providedIn: 'root'
})
export class BanquesService {

  private accessToken!: string; // Ajoutez cette ligne

  constructor(private http: HttpClient,
    private storageService: StorageService,) { }


  setAccessToken(token: string) {
    this.accessToken = token;
  }
  // Méthode pour ajouter le token JWT aux en-têtes
  getHeaders(): HttpHeaders {
    const token = this.storageService.getUser().token;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  //AFFICHER LA LISTE DES BANQUES
  AfficherLaListeBanques(): Observable<any> {
    return this.http.get(`${URL_BASE}banque/api/bank_list/`);
  }

  //AFFICHER UNE BANQUE EN FONCTION DE SON ID
  AfficherBanqueParId(id: number): Observable<any> {
    return this.http.get(`${URL_BASE}/banque/${id}`);
  }

  //SUPPRIMER UNE BANQUE
  SupprimerBanque(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${URL_BASE}/banque/delete/${id}`, null, { headers });
  }

  public banques = [
    {
      img1: './../../../assets/images/banque/bam.png',
      nom: 'BAM',
      siege: 'Hamdallaye',
      nomComplet: 'Banque Atlantique Mali',
      dateCreation: '12 Juin 2021',
      nomUser: 'Tiec DIARRA',
      img2: 'assets/img/profiles/avatar-02.jpg',
      description: 'Notre plateforme intelligente vous aide a trouver la banque ideale en fonction de vos besoins financiers ',
      nombreAgence: '10',
    },
    {
      img1: './../../../assets/images/banque/bam.png',
      nom: 'BIM',
      siege: 'Hamdallaye',
      nomUser: 'Aboubacar KONE',
      dateCreation: '12 Sept. 2021',
      nomComplet: 'Banque Atlantique Mali',
      img2: 'assets/img/profiles/avatar-02.jpg',
      description: 'Notre plateforme intelligente vous aide a trouver la banque ideale en fonction de vos besoins financiers ',
      nombreAgence: '10',
    },
    {
      img1: './../../../assets/images/banque/bam.png',
      nom: 'BNDA',
      nomComplet: 'Banque Atlantique Mali',
      nomUser: 'Mamdy CAMARA',
      siege: 'Hamdallaye',
      dateCreation: '18 Jan. 2021',
      img2: 'assets/img/profiles/avatar-02.jpg',
      description: 'Notre plateforme intelligente vous aide a trouver la banque ideale en fonction de vos besoins financiers',
      nombreAgence: '10',
    },
    {
      img1: './../../../assets/images/banque/bam.png',
      nom: 'UBA',
      siege: 'Hamdallaye',
      nomUser: 'Tiec DIARRA',
      dateCreation: '12 Juin 2021',
      nomComplet: 'Banque Atlantique Mali',
      img2: 'assets/img/profiles/avatar-02.jpg',
      description: 'Notre plateforme intelligente vous aide a trouver la banque ideale en fonction de vos besoins financiers',
      nombreAgence: '10',
    },
  ];
}
