import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparateurbanqueComponent } from './comparateurbanque.component';

const routes: Routes = [
    {
        path: '',
        component: ComparateurbanqueComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComparateurbanqueRoutingModule { }
