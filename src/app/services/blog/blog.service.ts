import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { environment } from 'src/environments/environment';

const URL_BASE: string = environment.Url_BASE;


@Injectable({
  providedIn: 'root'
})
export class BlogService {


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

  //AFFICHER LA LISTE DES BLOGS
  AfficherLaListeBlog(): Observable<any> {
    return this.http.get(`${URL_BASE}/blog`);
  }

  //AFFICHER UNE BLOGS EN FONCTION DE SON ID
  AfficherBlogParId(id: number): Observable<any> {
    return this.http.get(`${URL_BASE}/blog/${id}`);
  }

    //SUPPRIMER UN BLOG
    SupprimerBlog(id: any): Observable<any> {
      const headers = this.getHeaders();
      return this.http.post(`${URL_BASE}/blog/delete/${id}`, null, { headers });
    }

  public blogs = [
    {
      img1: 'https://source.unsplash.com/600x400/?computer',
      titre: 'Banque en ligne : BforBank dévoile une nouvelle offre et fait peau neuve !',
      banque: 'BAM',
      banqueNom: 'Banque Atlantique Mali',
      nomuser: 'Admin',
      datecreation: '12 Juni 2023',
      imguser: '../../../assets/images/client/01.jpg',
      description: 'BforBank, la banque en ligne du Crédit Agricole,souhaite conquérir une nouvelle clientèle, plus jeune. Elle a ainsi revu l’intégralité deson offre, de même que son identité visuelle. Décryptage.',
    },
    {
      img1: 'https://source.unsplash.com/600x400/?food',
      titre: 'Le nombre d’utilisateurs des paiements mobiles en Mali a doublé',
      banque: 'BIM',
      banqueNom: 'Banque Atlantique Mali',
      nomuser: 'Admin',
      datecreation: '21 Sept. 2023',
      imguser: '../../../assets/images/client/01.jpg',
      description: 'Le succès des paiements sans contact via un smartphone ne se dément pas. En effet, en seulement un an, cette méthode de paiement à la fois pratique et sécurisé a bondi de +137 %. Ce chiffre a été communiqué par l’Observatoire de la sécurité des moyens de paiement auprès de la Banque du Mali au quotidien Le Parisien.',
    },
    {
      img1: 'https://source.unsplash.com/600x400/?car,automobile',
      titre: 'Les seuils de revenus mensuels nécessaires pour bénéficier de la carte à débit différé',
      banque: 'BNDA',
      banqueNom: 'Banque Atlantique Mali',
      nomuser: 'Admin',
      datecreation: '12 Juni 2023',
      imguser: '../../../assets/images/client/01.jpg',
      description: 'Au cours des dernières années, les banques digitales ont procédé à un relèvement des seuils de revenus nécessaires pour bénéficierd’une carte bancaire à débit différé. Ce moyen de paiement spécifique permet en effet de reporter le débit des opérations (achats, réservations…) à la fin du mois et le risque d’impayé reste ainsi élevé.',
    },
  ];
}
