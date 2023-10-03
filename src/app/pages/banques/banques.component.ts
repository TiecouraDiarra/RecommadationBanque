import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banques',
  templateUrl: './banques.component.html',
  styleUrls: ['./banques.component.scss']
})
export class BanquesComponent implements OnInit {
  public Toggledata = true;
  public ToggledataC = true;
  public ToggledataO = true;
  selectedValueR: string | any = 'region';
  selectedValue: string | any = 'pays';
  pays: any =['Mali', 'Senegal'];
  regions: any = [];
  communes: any = [];
  region: any = ['Bamako', 'Kayes'];
  commune:  any = ['Commune I', 'Commune II'];



  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLogleC() {
    this.ToggledataC = !this.ToggledataC;
  }

  iconLogleO() {
    this.ToggledataO = !this.ToggledataO;
  }

  onChange(newValue: any) {
    this.regions = this.region.filter(
      (el: any) => el.pays.nom == newValue.value
    );
  }

  onChangeRegion(newValue: any) {
    this.communes = this.commune.filter(
      (el: any) => el.region.nom == newValue.value
    );
  }
  constructor() { }

  ngOnInit(): void {
  }

}
