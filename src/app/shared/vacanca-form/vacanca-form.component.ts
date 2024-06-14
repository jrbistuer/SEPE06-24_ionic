import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IVacanca } from 'src/app/models/interfaces';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-vacanca-form',
  standalone: true,
  imports: [IonButton,  FormsModule, ReactiveFormsModule ],
  templateUrl: './vacanca-form.component.html',
  styleUrl: './vacanca-form.component.scss'
})
export class VacancaFormComponent {

  @Input() buttonName!: string;

  @Input() set vacanca(v: IVacanca) {
    this.vac = v;
    console.log('vacanca', this.vac);
    this.fillForm(v);
  };

  get vacanca() {
    return this.vac;
  }

  @Output() outVacanca = new EventEmitter<IVacanca>();

  vacancaForm!: FormGroup;

  vac!: IVacanca;


  constructor() {
    this.createForm();
  }

  createForm() {
    this.vacancaForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      preu: new FormControl(''),
      descripcio: new FormControl(''),
      actiu: new FormControl('')
    });
  }

  fillForm(v: IVacanca) {
//    this.vacancaForm.controls['nom'].setValue(v.nom);
    this.vacancaForm.patchValue({
      nom: v.nom,
      preu: v.preu,
      descripcio: v.descripcio,
      actiu: v.actiu
    })
  }

  outputVacanca() {
   //console.log(this.vacancaForm);

    if(this.vacancaForm.valid) {
      const v: IVacanca = {
        nom: this.vacancaForm.get('nom')?.value,
        preu: +this.vacancaForm.get('preu')?.value,
        descripcio: this.vacancaForm.get('descripcio')?.value,
        actiu: true,
        user: ''
      }
      this.outVacanca.emit(v);
    } else {
      console.log('INVALID!!!');
    }

  }

}
