import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  value: string = '';

  softwares = ['Docker', 'VsCode', 'Mongo'];
  systems = ['Linux', 'Windows', 'Ambos'];
  licensesType = ['Livre', 'Paga', 'Open Source'];

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(form);
    console.log('Submit!');
    console.log('Solicitante: ' + value.solicitante);
    console.log('Softwares: ' + value.software);
    console.log('Versão: ' + value.version);
    console.log('Idioma: ' + value.language);
    console.log('Espaço em Disco: ' + value.size);
    console.log('Sistema Operacional: ' + value.os);
    console.log('Tipo de Licença: ' + value.license);
  }
}
