import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  soli = 'Solicitante';

  softwares = ['Docker', 'VsCode', 'Mongo'];
  sistemas = ['Linux', 'Windows'];
}
