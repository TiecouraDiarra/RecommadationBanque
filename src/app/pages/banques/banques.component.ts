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
