import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public Toggledata = true;
  public ToggledataC = true;
  public ToggledataO = true;

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLogleC() {
    this.ToggledataC = !this.ToggledataC;
  }

  iconLogleO() {
    this.ToggledataO = !this.ToggledataO;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
