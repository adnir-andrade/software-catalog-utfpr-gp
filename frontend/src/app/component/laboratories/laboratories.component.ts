import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratory } from '../../laboratory';
import { BlockService } from '../../block.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css'],
})
export class LaboratoriesComponent implements OnInit {
  labs$: Observable<Laboratory[]> = new Observable();

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.fetchLabs();
  }

  private fetchLabs(): void {
    // Precisamos mudar esta parte para ser dinamico.
    // O id, que eh esta string ai, precisa ser passado pela pagina anterior (Blocks)
    this.labs$ = this.blockService.getLabs('6518ce3e744e7c039ae5afc0');
  }
}
