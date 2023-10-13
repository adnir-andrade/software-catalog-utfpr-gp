import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let blockId = params['blockId'];
      this.fetchLabs(blockId);
    });
  }

  private fetchLabs(blockId: string): void {
    this.labs$ = this.blockService.getLabs(blockId);
  }
}
