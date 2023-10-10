import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../../block';
import { Laboratory } from '../../laboratory';
import { BlockService } from '../../block.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
})
export class BlocksComponent implements OnInit {
  blocks$: Observable<Block[]> = new Observable();
  labs$: Observable<Laboratory[]> = new Observable();

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.fetchBlocks();
    this.fetchLabs();
  }

  private sendId() {}

  private fetchBlocks(): void {
    this.blocks$ = this.blockService.getBlocks();
  }

  private fetchLabs(): void {
    this.labs$ = this.blockService.getLabs('6518ce3e744e7c039ae5afc0', '0');
  }
}
