import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // consumir bdAPI
  // readonly--> es una variable constante
  readonly API_URL = "https://jsonplaceholder.typicode.com/users";
  
  users: any[];

  constructor(private http: HttpClient) { 
    this.users = [];
  }

  // metodo para obtener los usuarios de la API
  getUsers() {
    return this.http.get<any[]>(this.API_URL);
  }

  // metodo para obtener un usuario por id
  getUser(id: number) {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
}
