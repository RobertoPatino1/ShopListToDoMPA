import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private URL_FINDALL_USERS:string='http://localhost:3000/rest/usuario/findAll/json'
  private PATH_LISTABYUSUARIO:string = ``;
  private PATH_LISTA:string = 'http://localhost:3000/rest/lista/'
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL_FINDALL_USERS);
  }

  getResponseListaByUsuarioID(id:number){
    this.PATH_LISTABYUSUARIO = `/findByUsuarioId/${id}/json`
    return this.http.get(this.PATH_LISTA+this.PATH_LISTABYUSUARIO);
  }
}
