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
  * @description Metodo para consulta por CPF verificando duplicidade
  * @method getByIdentityDocument
  * @returns Objeto de cliente referente ao CPF cadastrado, se houver.
  */
  getByIdentityDocument(identityDocument : string): Observable <any> {
    return this.http.get(`${this.url}/client/getIdDocument/${identityDocument}`);
  }

 /**
  * @description Metodo para consulta por CPF verificando duplicidade
  * @method getByName
  * @returns Listagem de cientes cadastrados com o nome respectivo
  */
  getByName(name: string): Observable <any>{
    return this.http.get(`${this.url}/client/getByName/${name}`);
  }

  /**
 * @description Metodo para gravar um novo cliente
 * @method save
 */
  save(client: ClienteModel): Observable<any> {
    return this.http.post(`${this.url}/client`, client);
  }

  /**
  * @description Metodo para atualizar o cliente
  * @method update
  */
  update(client: ClienteModel, id: number): Observable<any> {
    return this.http.put(`${this.url}/clientes/${id}`, client);
  }

  /**
  * @description Metodo para listar por Id
  * @method delete
  */
  delete(id: number): Observable <any> {
    return this.http.delete(`${this.url}/client/${id}`);
  }



}
