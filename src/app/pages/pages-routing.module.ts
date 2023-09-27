import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { IndexTwoComponent } from "./index-two/index-two.component"
import { IndexThreeComponent } from './index-three/index-three.component';
import { IndexFourComponent } from './index-four/index-four.component';
import { IndexFiveComponent } from './index-five/index-five.component';
import { IndexSixComponent } from './index-six/index-six.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
// import { BanqueComponent } from './detailbanque/detailbanque.component';
// import { TrouverbanqueComponent } from './trouverbanque/trouverbanque.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ComparateurbanqueComponent } from './comparateurbanque/comparateurbanque.component';
import { DetailbanqueComponent } from './detailbanque/detailbanque.component';
import { OuverturecompteComponent } from './ouverturecompte/ouverturecompte.component';
import { FraisbancaireComponent } from './fraisbancaire/fraisbancaire.component';
import { OffrebancaireComponent } from './offrebancaire/offrebancaire.component';
import { TauxplacementComponent } from './tauxplacement/tauxplacement.component';
import { BanqueligneComponent } from './banqueligne/banqueligne.component';
// import { ContactComponent } from '../shared/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },  
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'index-two',
    component: IndexTwoComponent
  },
  {
    path: 'index-three',
    component: IndexThreeComponent
  },
  {
    path: 'index-four',
    component: IndexFourComponent
  },
  {
    path: 'index-five',
    component: IndexFiveComponent
  },
  {
    path: 'index-six',
    component: IndexSixComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'apropos',
    component: AproposComponent
  },
  {
    path: 'detail-banque',
    component: DetailbanqueComponent
  },
  // {
  //   path: 'trouverbanque',
  //   component: TrouverbanqueComponent
  // },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
  ,
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'comparateur-banque',
    component: ComparateurbanqueComponent
  }
  ,
  {
    path: 'ouverture-compte',
    component: OuverturecompteComponent
  },
  {
    path: 'frais-bancaire',
    component: FraisbancaireComponent
  },
  {
    path: 'offre-bancaire',
    component: OffrebancaireComponent
  },
  {
    path: 'taux-placement',
    component: TauxplacementComponent
  },
  {
    path: 'banque-ligne',
    component: BanqueligneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
