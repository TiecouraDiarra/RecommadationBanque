import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const URL_BASE: string = environment.Url_BASE
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private accessToken!: string; // Ajoutez cette ligne


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(USER_KEY) // Remplacez par votre token JWT valide
    })
  };
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
  // Méthode pour ajouter le token JWT aux en-têtes
  getHeaders(): HttpHeaders {
    const token = this.storageService.getUser().access;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  //AFFICHER LES INFORMATIONS DE USER CONNECTE
  AfficherInfoUserConnecte(): Observable<any> {
    const headers = this.getHeaders();
    console.log(headers)
    return this.http.get(`${URL_BASE}auth/api/user_info/`, { headers });
  }

  //AFFICHER LA PHOTO DE USER CONNECTER
  AfficherPhotoUserConnecter(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${URL_BASE}/user/photo/get`, { headers });
  }

  //CHANGER MOT DE PASSE
  ChangerMotDePasse(old_password: string, password: string): Observable<any> {
    const headers = this.getHeaders();
    // console.log(headers)
    // console.log('Ancien mdp', old_password)
    // console.log('nouveau mdp', password)
    return this.http.post(
      URL_BASE + '/user/password_reset',
      {
        old_password,
        password,
      },
      { headers }
    );
  }

  //CHANGER PHOTO PROFILE
  changerPhoto(photo: File): Observable<any> {
    const headers = this.getHeaders();
    headers.set('Cache-Control', 'no-cache'); // Désactive le cache pour cette requête
    const formData = new FormData();
    formData.append('photo', photo);
    return this.http.post(`${URL_BASE}/user/update/photo`, formData, { headers });
  }

  //ENVOIE D'EMAIL POUR CHANGER LE PASSWORD
  forgotPassword(email: string): Observable<any> {
    // const headers = this.getHeaders();
    return this.http.post(`${URL_BASE}/reset/pass`, {
      email
    });
  }

  //CHANGER PASSWORD APRES OUBLIE
  ChangerPassword(token: string, password: any): Observable<any> {
    return this.http.post(`${URL_BASE}/rdv/${token}`, {
      password
    }
    );
  }


  //MODIFIER PROFIL USER
  modifierProfil(
    nom: string,
    telephone: string,
    email: string,
    dateNaissance: string
  ): Observable<any> {
    const formData = new FormData();
    const headers = this.getHeaders();
    formData.append('nom', nom);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('dateNaissance', dateNaissance);
    return this.http.post(
      URL_BASE + '/user/update',
      formData,
      { headers }
    );
  }


}
