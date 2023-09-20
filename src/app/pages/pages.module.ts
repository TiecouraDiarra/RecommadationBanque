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
import { BanqueComponent } from './banque/banque.component';
import { TrouverbanqueComponent } from './trouverbanque/trouverbanque.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

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
    BanqueComponent,
    TrouverbanqueComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule,
    ScrollToModule.forRoot(),
    FeatherModule.pick(icons),
    NgbModalModule,
    // NgxYoutubePlayerModule.forRoot()
  ]
})
export class PagesModule { }
