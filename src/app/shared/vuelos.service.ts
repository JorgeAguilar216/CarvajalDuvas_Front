import { Injectable } from '@angular/core';
import { Vuelos } from './vuelos.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http:HttpClient) { }

  
  formData:Vuelos = new Vuelos();
  readonly baseURL = 'http://localhost:52718/api/Vuelos'
  list : Vuelos[];

  postVuelos(){
   return this.http.post(this.baseURL, this.formData);
  }
  putVuelos(){
    return this.http.put(`${this.baseURL}/${this.formData.vueloID}`, this.formData);
   }

   deleteVuelos(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
   }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Vuelos[]);
  }

}
