import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  solicitanteInput: string = '';
  softwareInput: string = '';

  softwares = ['Docker', 'VsCode', 'Mongo'];
  systems = ['Linux', 'Windows', 'Ambos'];
  licensesType = ['Livre', 'Paga', 'Open Source'];

  onSubmit(form: NgForm) {
    const inputField = form.value;

    const newSolicitation: { [key: string]: string } = {};

    for (const attribute in inputField) {
      if (inputField[attribute]) {
        newSolicitation[attribute] = inputField[attribute];
      }
    }

    console.log(newSolicitation);
  }
}
