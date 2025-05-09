import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // consumir bdAPI
  // readonly--> es una variable constante
  readonly API_URL = "https://jsonplaceholder.typicode.com/users";
  // readonly API_URL = 'https://ca8d440d5f971164a0b0.free.beeceptor.com/api/users';
  
  users: User[];

  constructor(private http: HttpClient) { 
    this.users = [];
  }

  // metodo para obtener los usuarios de la API
  getUsers() {
    return this.http.get<User[]>(this.API_URL);
  }

  // metodo para obtener un usuario por id
  getUser(id: string) {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  // metodo para crear informacion de un usuario
  postUser(user: User) {
    return this.http.post<User>(this.API_URL, user);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
