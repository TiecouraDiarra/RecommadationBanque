import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

type EducationalDetails = {
  highest_qualification: AbstractControl;
  university: AbstractControl;
  total_marks: AbstractControl;
};

@Component({
  selector: 'app-ouverturecompte',
  templateUrl: './ouverturecompte.component.html',
  styleUrls: ['./ouverturecompte.component.scss']
})
export class OuverturecompteComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  carteDetails!: FormGroup;
  testDetails!: FormGroup;
  educationalControls!: EducationalDetails;
  personal_step = false;
  address_step = false;
  education_step = false;
  carte_step = false;
  test_step = false;
  step = 1;

  elementSelectionne: string | null = null;

  selectElement(element: string) {
    this.elementSelectionne = element;
  }

  formRevenu: any = {
    nom: null,
    email: null,
    telephone: null,
    quartier: null,
  }

  constructor(private formBuilder: FormBuilder, public router: Router,) { }

  ngOnInit(): void {
    this.step = 1;
    this.personalDetails = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', Validators.required],
      // phone: ['', Validators.required]
    });
    this.addressDetails = this.formBuilder.group({
      city: ['', Validators.required],
      // address: ['', Validators.required],
      // pincode: ['', Validators.required]
    });
    this.educationalDetails = this.formBuilder.group({
      // highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      // total_marks: ['', Validators.required]
    });
    this.testDetails = this.formBuilder.group({
      // highest_qualification: ['', Validators.required],
      test: ['', Validators.required],
      // total_marks: ['', Validators.required]
    });
    this.carteDetails = this.formBuilder.group({
      // highest_qualification: ['', Validators.required],
      test: ['', Validators.required],
      // total_marks: ['', Validators.required]
    });
  }

  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  get test() { return this.testDetails.controls; }
  get carte() { return this.carteDetails.controls; }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) { return; }
      this.step++;
    }
    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) { return; }
      this.step++;
    }
    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) { return; }
      this.step++;
    }
    if (this.step == 4) {
      this.test_step = true;
      if (this.testDetails.invalid) { return; }
      this.step++;
    }
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
    if (this.step == 3) {
      this.address_step = false;
    }
    if (this.step == 4) {
      this.test_step = false;
    }
    if (this.step == 5) {
      this.carte_step = false;
    }
  }

  submit() {
    if (this.step == 5) {
      this.carte_step = true;
      if (this.testDetails.invalid) { return; }
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn',
          cancelButton: 'btn btn-danger',
        },
        heightAuto: false
      })

      swalWithBootstrapButtons.fire({
        text: "Etes-vous sûre de faire cette recherche ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmer',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Recherche effectuee avec succes ',
            text: "Nous vous avons prepare ces recommandations !",
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
            this.path()
          })
        }
      })
    }
  }

  path() {
    this.router.navigate(["/mes-banques"]);
  }
  
}
