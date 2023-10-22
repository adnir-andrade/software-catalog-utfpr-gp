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

    /*
      Idea:
        Create - in block.routes.ts (backend) - a route to POST this object taking a block/lab ID
        In blockservice.ts, create a function to link this POST function with the frontend
        Call this function here - It will have to be passed as an argument to the function that will call POST

    */

    console.log(newSolicitation);
  }
}
