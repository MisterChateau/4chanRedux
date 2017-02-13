import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChanService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3000';
  }

  getThreads(board) {
    return this.http.get(`${this.baseUrl}/catalog/${board}`)
      .map((response) => response.json());
  }
}
