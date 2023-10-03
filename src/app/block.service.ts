import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Block } from './block';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  private url = 'http://localhost:5200';
  private blocks$: Subject<Block[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private refreshBlocks() {
    this.httpClient.get<Block[]>(`${this.url}/blocks`).subscribe((blocks) => {
      this.blocks$.next(blocks);
    });
  }

  getBlocks(): Subject<Block[]> {
    this.refreshBlocks();
    return this.blocks$;
  }

  getBlock(id: string): Observable<Block> {
    return this.httpClient.get<Block>(`${this.url}/blocks/${id}`);
  }

  createBlock(block: Block): Observable<string> {
    return this.httpClient.post(`${this.url}/blocks`, block, {
      responseType: 'text',
    });
  }

  updateBlock(id: string, block: Block): Observable<string> {
    return this.httpClient.put(`${this.url}/blocks/${id}`, block, {
      responseType: 'text',
    });
  }

  deleteBlock(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/blocks/${id}`, {
      responseType: 'text',
    });
  }
}
