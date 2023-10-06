import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BanquesService } from 'src/app/services/banques/banques.service';

@Component({
  selector: 'app-mes-banques',
  templateUrl: './mes-banques.component.html',
  styleUrls: ['./mes-banques.component.scss']
})
export class MesBanquesComponent implements OnInit {

  banqueT: any



  constructor(
    private formBuilder: FormBuilder,    
    private serviceBanque: BanquesService,
    private router: Router
    ) {
      this.banqueT = this.serviceBanque.banques
     }


  ngOnInit(): void {}


  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS BANQUE
  goToDettailBanque(id: number) {
    return this.router.navigate(['detail-banque', id])
  }

}
