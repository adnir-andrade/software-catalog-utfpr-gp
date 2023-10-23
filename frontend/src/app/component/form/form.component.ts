import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockService } from '../../block.service';
import { Software } from 'src/app/software';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  labId: string = '0';
  blockId: string = '65289cb0693270ff25fc0c81';

  solicitanteInput: string = '';
  softwareInput: string = '';

  softwares = ['Docker', 'VsCode', 'Mongo'];
  systems = ['Linux', 'Windows', 'Ambos'];
  licensesType = ['Livre', 'Paga', 'Open Source'];

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  onSubmit(form: NgForm) {
    const inputField = form.value;

    const requestJson = JSON.stringify(inputField);
    localStorage.setItem('newRequest', requestJson);
    console.log(JSON.parse(localStorage.getItem('newRequest') as string));

    const newSolicitation: Software = {
      software: 'New Software',
      license: 'Paga',
      os: 'Qualquer',
      requester: 'Adnir Andrade',
      block: 'Bloco B6',
      date: new Date(),
    };

    this.addRequisition(this.blockId, this.labId, newSolicitation);
  }

  private addRequisition(
    blockId: string,
    labId: string,
    newRequest: Software
  ): void {
    console.log('Calling addSoftware');
    this.blockService.addSoftware(blockId, labId, newRequest).subscribe(
      (response: string) => {
        // Handle the response here, such as displaying a success message
        console.log('Response from server:', response);
        // You can also perform any additional actions based on the response
      },
      (error) => {
        // Handle errors here, such as displaying an error message
        console.error('Error:', error);
      }
    );
  }
}
