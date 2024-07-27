import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) { }

  getJsonFile(filePath: string): Observable<any> {
    return this.http.get<any>(filePath);
  }
}