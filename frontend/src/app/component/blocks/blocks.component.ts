import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../../block';
import { BlockService } from '../../block.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
})
export class BlocksComponent implements OnInit {
  blocks$: Observable<Block[]> = new Observable();

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.fetchBlocks();
  }

  private fetchBlocks(): void {
    this.blocks$ = this.blockService.getBlocks();
  }
}
