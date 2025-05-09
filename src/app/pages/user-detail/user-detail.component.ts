import { Component } from '@angular/core';
import { HeaderUserComponent } from "../../components/header-user/header-user.component";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  imports: [HeaderUserComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  selectedUser: any;

  // constructor(private route: ActivatedRoute, public userService: UserService) {}
  constructor(public userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.selectedUser = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
