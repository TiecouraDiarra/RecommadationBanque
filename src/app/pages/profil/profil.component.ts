import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public Toggledata = true;
  public ToggledataC = true;
  public ToggledataO = true;

  User: any

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLogleC() {
    this.ToggledataC = !this.ToggledataC;
  }

  iconLogleO() {
    this.ToggledataO = !this.ToggledataO;
  }
  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {

    //AFFICHER LES INFORMATIONS DE USER CONNECTE
    this.serviceUser.AfficherInfoUserConnecte().subscribe(data => {
      this.User = data;
      console.log(this.User);
    }
    );

  }
}