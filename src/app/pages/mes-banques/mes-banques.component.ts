import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mes-banques',
  templateUrl: './mes-banques.component.html',
  styleUrls: ['./mes-banques.component.scss']
})
export class MesBanquesComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {}

}
