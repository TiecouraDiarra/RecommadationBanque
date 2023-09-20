import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { IndexTwoComponent } from "./index-two/index-two.component"
import { IndexThreeComponent } from './index-three/index-three.component';
import { IndexFourComponent } from './index-four/index-four.component';
import { IndexFiveComponent } from './index-five/index-five.component';
import { IndexSixComponent } from './index-six/index-six.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
