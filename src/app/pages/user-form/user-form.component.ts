import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderUserComponent } from '../../components/header-user/header-user.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [HeaderUserComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm: FormGroup;
  id: FormControl;
  name: FormControl;
  email: FormControl;
  address: FormGroup;

  constructor(public userService: UserService) {
    this.id = new FormControl('');
    this.name = new FormControl('');
    this.email = new FormControl('');
    this.address = new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    });

    this.userForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address
    });
  }

  postUser() {
    console.log(this.userForm.value);

    this.userService.postUser(this.userForm.value).subscribe({
      next: (data) => {
        console.log('User created successfully', data);
      },
      error: (error) => {
        console.error('Error creating user', error);
      }
    });
  }
}


