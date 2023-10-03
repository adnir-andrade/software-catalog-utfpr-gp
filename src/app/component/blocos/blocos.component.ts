import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../../block';
import { BlockService } from '../../block.service';

@Component({
  selector: 'app-blocos',
  templateUrl: './blocos.component.html',
  styleUrls: ['./blocos.component.css'],
})
export class BlocosComponent implements OnInit {
  blocks$: Observable<Block[]> = new Observable();

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.fetchBlocks();
  }

  private fetchBlocks(): void {
    this.blocks$ = this.blockService.getBlocks();
  }
}
