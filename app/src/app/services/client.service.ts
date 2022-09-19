import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from '../pages/client/client.model';

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<{ data: Client[] }>(`${this.apiUrl}/`)
      .pipe(map((response) => {
        return response.data
      }))
  }

  getById() {}

  getByName(name : string) {
    return this.http.get<{ data: Client[] }>(`${this.apiUrl}/name/${name}`)
      .pipe(map((response) => {
        return response.data
      }))
  }

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
