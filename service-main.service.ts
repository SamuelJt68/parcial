import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private http = inject(HttpClient);

  constructor() { }

  getSeries() {
    return this.http.get('');
  }
}