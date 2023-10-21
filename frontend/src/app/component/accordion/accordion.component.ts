import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  title = (['VsCode', 'Git', 'DevC++']);

  public softwares: Array<Software> = [];

  constructor() {
    this.softwares.push(new Software('VsCode', 'ultima','cabrito','linux meu amor','Pablo'));
    this.softwares.push(new Software('docker', 'ultima','cabrito','linux meu amor','Adnir'));
  }
}

export class Software {
  constructor(public nome: string, version: string, idioma: string, os: string, solicitante: string) {}
}

