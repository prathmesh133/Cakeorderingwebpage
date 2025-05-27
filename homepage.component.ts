import { Component } from '@angular/core';
import { OrderingstepsComponent } from '../orderingsteps/orderingsteps.component';

@Component({
  selector: 'app-homepage',
  imports: [OrderingstepsComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'] 
})
export class HomepageComponent {}
