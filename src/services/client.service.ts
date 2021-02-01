import { ClienteModel } from './../models/Client/client.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private url = 'https://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }


  /**
   * @description Metodo para listar todos os clientes
   * @method getAll
   * @returns Listagem com todos os clientes
   */
  getAll() {
    return this.http.get(`${this.url}/client`);
  }

  /**
  * @description Metodo para listar por Id
  * @method get
  * @returns Listagem com todos os clientes
  */
  get(id: number): Observable<any> {
    return this.http.get(`${this.url}/client/${id}`);
  }

  /**
 * @description Metodo para gravar um novo cliente
 * @method save
 * @returns Listagem com todos os clientes
 */
  save(client: ClienteModel): Observable<any> {
    return this.http.post(`${this.url}/client`, client);
  }

  /**
  * @description Metodo para atualizar o cliente
  * @method update
  * @returns Listagem com todos os clientes
  */
  update(client: ClienteModel, id: number): Observable<any> {
    return this.http.put(`${this.url}/clientes/${id}`, client);
  }

  /**
  * @description Metodo para listar por Id
  * @method delete
  * @returns Listagem com todos os clientes
  */
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/client/${id}`);
  }

}
