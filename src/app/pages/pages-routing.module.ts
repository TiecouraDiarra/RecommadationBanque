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
import { BanqueComponent } from './banque/banque.component';
import { TrouverbanqueComponent } from './trouverbanque/trouverbanque.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
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
    path: 'banque',
    component: BanqueComponent
  },
  {
    path: 'trouverbanque',
    component: TrouverbanqueComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
