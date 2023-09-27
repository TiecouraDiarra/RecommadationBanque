import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparateurbanqueRoutingModule } from './comparateurbanque-routing.module';
import { ComparateurbanqueComponent } from './comparateurbanque.component';
// import { OuverturecompteComponent } from './ouverturecompte/ouverturecompte.component';

// import { BlogRoutingModule } from './blog-routing.module';
// import { BlogComponent } from './blog.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ComparateurbanqueComponent,
    // OuverturecompteComponent
  ],
  imports: [
    CommonModule,
    ComparateurbanqueRoutingModule,
    // Ng2SearchPipeModule
  ]
})
export class BlogModule { }
