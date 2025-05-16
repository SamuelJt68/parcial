import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private http = inject(HttpClient);

  constructor() { }

  getAir() {
    return this.http.get('https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json');
  }
}