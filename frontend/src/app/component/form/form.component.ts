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
  // TODO: Update those two to get the exact IDs from it's respective parent components
  labId: string = '0';
  blockId: string = '65289cb0693270ff25fc0c81';

  solicitanteInput: string = '';
  softwareInput: string = '';

  // TODO: Update those to get a list from the database
  softwares = ['Docker', 'VsCode', 'Mongo'];
  systems = ['Linux', 'Windows', 'Ambos'];
  licensesType = ['Livre', 'Paga', 'Open Source'];

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  onSubmit(form: NgForm) {
    const inputField = form.value;

    const newSolicitation: Software = {
      block: 'Bloco B6',
      date: new Date(),
    };

    for (const [key, value] of Object.entries(inputField)) {
      const inputValue: string & Date = value as string & Date;

      if (value) {
        console.log('Has value');
        newSolicitation[key as keyof Software] = inputValue;
      }
    }

    this.addRequisition(this.blockId, this.labId, newSolicitation);
  }

  private addRequisition(
    blockId: string,
    labId: string,
    newRequest: Software
  ): void {
    console.log('Calling addSoftware');
    this.blockService.addSoftware(blockId, labId, newRequest).subscribe({
      next: (response: string) => {
        console.log('Response from server:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
