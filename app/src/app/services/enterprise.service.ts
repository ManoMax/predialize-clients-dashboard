import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Enterprise } from '../pages/enterprise/enterprise.model';

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}  

  getAll() : Observable<any> {
    return this.http.get<{ data: any }>(`${this.apiUrl}/enterprise`)
      .pipe(map((response) => {
        return response.data
      }))
  }

  getById() {}

  getByName(name : string) : Observable<any> {
    return this.http.get<{ data: any }>(`${this.apiUrl}/enterprise/name/${name}`)
      .pipe(map((response) => {
        return response.data
      }))
  }

  getTotalsByEnterprise() {}

  getEnterprisesByCompany(client_id : string) : Observable<any> {
    return this.http.get<{ enterprises: any }>(`${this.apiUrl}/${client_id}/enterprise`)
      .pipe(map((response) => {
        console.log(response)
        return response.enterprises
      }))
  }
}
