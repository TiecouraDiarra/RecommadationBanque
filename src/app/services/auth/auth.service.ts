import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service'; // Importez le CookieService

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
    private storageService: StorageService,
    // private cookieService: CookieService
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
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    // roles: string,
  ): Observable<any> {
    // const formData = new FormData();
    // formData.append('first_name', first_name);
    // formData.append('last_name', last_name);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('roles', roles);
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(password);

    return this.http.post(
      URL_BASE + 'auth/api/register/',
      {
        first_name,
        last_name,
        email,
        password,
      },
      httpOptions
    );
  }

  //METHODE PERMETTANT DE SE DECONNECTER
  // logout(): Observable<any> {
  //   const req = new HttpRequest('POST', URL_BASE + '/logout', {}, httpOptions);
  //   return this.http.request(req);
  // }

  //METHODE PERMETTANT D'ACTUALISER LA PAGE
  reloadPage(): void {
    window.location.reload();
  }

  logout(): Observable<any> {
    //return this.http.post(AUTH_API + 'signout', {}, httpOptions);
    const req = new HttpRequest('POST', URL_BASE + '/logout', {}, httpOptions);
    return this.http.request(req);
  }
  
}
