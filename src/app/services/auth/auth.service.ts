import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_BASE: string = environment.Url_BASE

const httpOptions: any = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  // Méthode pour ajouter le token JWT aux en-têtes
  getHeaders(): HttpHeaders {
    const token = this.storageService.getUser().token;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  //METHODE PERMETTANT DE SE CONNECTER
  connexion(email: string, password: string): Observable<any> {
    console.log(email);
    console.log(password);
    return this.http.post(
      URL_BASE + 'auth/api/login/',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  //METHODE PERMETTANT DE S'INSCRIRE
  inscription(
    nom: string,
    prenom: string,
    email: string,
    password: string,
    roles: string,
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', nom);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('roles', roles);

    return this.http.post(
      URL_BASE + '/register',
      formData,
    );
  }

  //METHODE PERMETTANT DE SE DECONNECTER
  logout(): Observable<any> {
    const req = new HttpRequest('POST', URL_BASE + '/logout', {}, httpOptions);
    return this.http.request(req);
  }

  //METHODE PERMETTANT D'ACTUALISER LA PAGE
  reloadPage(): void {
    window.location.reload();
  }
}
