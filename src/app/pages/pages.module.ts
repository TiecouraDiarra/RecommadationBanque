import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeatherModule } from 'angular-feather';
import { Menu, ArrowUp, User, Play } from 'angular-feather/icons';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// // @ts-ignore
// import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { IndexTwoComponent } from "./index-two/index-two.component"
import { IndexThreeComponent } from './index-three/index-three.component';
import { IndexFourComponent } from './index-four/index-four.component';
import { IndexFiveComponent } from './index-five/index-five.component';
import { IndexSixComponent } from './index-six/index-six.component';
import { IndexComponent } from './index/index.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailbanqueComponent } from './detailbanque/detailbanque.component';
// import { TrouverbanqueComponent } from './trouverbanque/trouverbanque.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ComparateurbanqueComponent } from './comparateurbanque/comparateurbanque.component';
import { OuverturecompteComponent } from './ouverturecompte/ouverturecompte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanquesComponent } from './banques/banques.component';
import { MesBanquesComponent } from './mes-banques/mes-banques.component';
import { TauxplacementComponent } from './tauxplacement/tauxplacement.component';
import { AdministrationComponent } from './administration/administration.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BanqueComponent } from './administration/banque/banque.component';
import { UtilisateurComponent } from './administration/utilisateur/utilisateur.component';
import { GestblogComponent } from './administration/gestblog/gestblog.component';
import { QuestionsComponent } from './administration/questions/questions.component';
import { DashboardComponent } from './administration/dashboard/dashboard.component';

const icons = {
  Menu, ArrowUp, User, Play
};

@NgModule({
  declarations: [
    IndexTwoComponent,
    IndexThreeComponent,
    IndexFourComponent,
    IndexFiveComponent,
    IndexSixComponent,
    IndexComponent,
    AccueilComponent,
    FooterComponent,
    AproposComponent,
    DetailbanqueComponent,
    // TrouverbanqueComponent,
    BlogComponent,
    ContactComponent,
    ProfilComponent,
    ComparateurbanqueComponent,
    OuverturecompteComponent,
    BanquesComponent,
    MesBanquesComponent,
    TauxplacementComponent,
    AdministrationComponent,
    BanqueComponent,
    UtilisateurComponent,
    GestblogComponent,
    QuestionsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollToModule.forRoot(),
    FeatherModule.pick(icons),
    NgbModalModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    // NgxYoutubePlayerModule.forRoot()
  ]
})
export class PagesModule { }
