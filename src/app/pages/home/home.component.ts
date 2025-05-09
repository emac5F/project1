import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderUserComponent } from '../../components/header-user/header-user.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeaderUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
