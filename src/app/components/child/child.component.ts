import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //usando decoradores
  // @Input() 
  // msg: string = ''; // Example input property

  // @Input()
  // person: any;

  // usando signals - nueva sintaxis(recomendado)
  msg = input<string>(''); // Example input property

  person = input<any>(); // Example input property
}
