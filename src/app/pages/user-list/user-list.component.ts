import { Component, OnInit } from '@angular/core';
import { HeaderUserComponent } from '../../components/header-user/header-user.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [HeaderUserComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    // se conectamos a la API y obtenemos los usuarios
    this.userService.getUsers().subscribe({
      // esto se va a ejecutar cuando la peticion sea exitosa
      next: (data) => {
        console.log(data);
        this.userService.users = data;
      },
      // esto se va a ejecutar cuando la peticion falle
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsers();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
